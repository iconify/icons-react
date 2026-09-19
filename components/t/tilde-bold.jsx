import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezp74yeys.css';
import '../../css/a/a__s2g6zp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGcKbddeti" class="ezp74yeys"/></defs><g class="a__s2g6zp"><use href="#SVGcKbddeti"/><use href="#SVGcKbddeti"/></g>`,
		"fallback": "glyphs:tilde-bold",
	});
}

export default Component;
