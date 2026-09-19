import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz4dt-pak.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz4dt-pak"/>`,
		"fallback": "fluent-emoji-high-contrast:kick-scooter",
	});
}

export default Component;
