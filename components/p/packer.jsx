import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zroepubiq.css';
import '../../css/z/z-9b709tb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zroepubiq"/><path class="z-9b709tb"/>`,
		"fallback": "devicon:packer",
	});
}

export default Component;
