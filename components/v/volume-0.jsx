import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d354bab3j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d354bab3j"/>`,
		"fallback": "fluent-mdl2:volume-0",
	});
}

export default Component;
