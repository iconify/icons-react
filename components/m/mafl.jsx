import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx6qfbb5e.css';
import '../../css/v/vzac3-h6e.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/amn1mwbqi.css';
import '../../css/b/bc5e628qw.css';

const viewBox = {"width":600,"height":600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG86yE1OZs" class="qx6qfbb5e"/><path id="SVG2oL9e4Wj" class="vzac3-h6e"/></defs><g class="ft5dv1b6b"><rect class="amn1mwbqi"/><path class="bc5e628qw"/><use href="#SVG86yE1OZs"/><use href="#SVG86yE1OZs"/><use href="#SVG86yE1OZs"/><use href="#SVG2oL9e4Wj"/><use href="#SVG2oL9e4Wj"/><use href="#SVG2oL9e4Wj"/></g>`,
		"fallback": "thesvg-color:mafl",
	});
}

export default Component;
