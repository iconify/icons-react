import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izdfergmo.css';
import '../../css/v/vwvszy4rp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izdfergmo"/><path class="vwvszy4rp"/>`,
		"fallback": "devicon:sourceengine",
	});
}

export default Component;
