import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd9kb2bas.css';
import '../../css/l/l19uj4vqh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd9kb2bas"/><path class="l19uj4vqh"/>`,
		"fallback": "devicon:netlify-wordmark",
	});
}

export default Component;
