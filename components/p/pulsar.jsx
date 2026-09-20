import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4nfscq4x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4nfscq4x"/>`,
		"fallback": "thesvg-color:pulsar",
	});
}

export default Component;
