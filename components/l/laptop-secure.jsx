import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw955ewga.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw955ewga"/>`,
		"fallback": "fluent-mdl2:laptop-secure",
	});
}

export default Component;
