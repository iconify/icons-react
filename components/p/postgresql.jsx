import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5r42tyxr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p5r42tyxr"/>`,
		"fallback": "devicon-plain:postgresql",
	});
}

export default Component;
