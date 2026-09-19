import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_dd5e65m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_dd5e65m"/>`,
		"fallback": "devicon:titaniumsdk",
	});
}

export default Component;
