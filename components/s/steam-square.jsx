import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf8qucwjx.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf8qucwjx"/>`,
		"fallback": "fa6-brands:steam-square",
	});
}

export default Component;
