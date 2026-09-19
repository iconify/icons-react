import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxeor7b5d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xxeor7b5d"/>`,
		"fallback": "heroicons:rectangle-group-20-solid",
	});
}

export default Component;
