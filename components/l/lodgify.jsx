import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzmyd9baj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yzmyd9baj"/>`,
		"fallback": "thesvg:lodgify",
	});
}

export default Component;
