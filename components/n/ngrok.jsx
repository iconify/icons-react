import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cap41rbwc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cap41rbwc"/>`,
		"fallback": "devicon:ngrok",
	});
}

export default Component;
