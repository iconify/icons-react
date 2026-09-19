import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezp74yeys.css';
import '../../css/k/k_7pasz5l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGcKbddeti" class="ezp74yeys"/></defs><g class="k_7pasz5l"><use href="#SVGcKbddeti"/><use href="#SVGcKbddeti"/></g>`,
		"fallback": "glyphs-poly:tilde",
	});
}

export default Component;
