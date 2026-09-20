import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbren1b0h.css';
import '../../css/n/n2xns2dzg.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sbren1b0h"><g id="SVGC8RjHw2T" transform="translate(150 150)"><path id="SVGCQNsheVl" class="n2xns2dzg"/><use href="#SVGCQNsheVl" transform="rotate(45)"/><use href="#SVGCQNsheVl" transform="rotate(90)"/><use href="#SVGCQNsheVl" transform="rotate(135)"/></g></g><use href="#SVGC8RjHw2T"/>`,
		"fallback": "thesvg-color:svg",
	});
}

export default Component;
