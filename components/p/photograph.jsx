import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdfa4_f-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdfa4_f-g"/>`,
		"fallback": "heroicons-outline:photograph",
	});
}

export default Component;
