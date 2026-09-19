import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6w6x0bgp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o6w6x0bgp"/>`,
		"fallback": "fluent-emoji-high-contrast:snowman-without-snow",
	});
}

export default Component;
