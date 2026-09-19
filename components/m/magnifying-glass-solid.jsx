import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhxadt-mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bhxadt-mf"/>`,
		"fallback": "heroicons:magnifying-glass-solid",
	});
}

export default Component;
