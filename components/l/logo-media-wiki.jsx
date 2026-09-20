import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njt4l8box.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(10 10)"><g id="SVGNMsnceQG"><path id="SVG18Gx1iGl" class="njt4l8box"/><use href="#SVG18Gx1iGl" transform="rotate(15)"/><use href="#SVG18Gx1iGl" transform="rotate(30)"/><use href="#SVG18Gx1iGl" transform="rotate(45)"/><use href="#SVG18Gx1iGl" transform="rotate(60)"/><use href="#SVG18Gx1iGl" transform="rotate(75)"/></g><use href="#SVGNMsnceQG" transform="rotate(90)"/><use href="#SVGNMsnceQG" transform="rotate(180)"/><use href="#SVGNMsnceQG" transform="rotate(270)"/></g>`,
		"fallback": "ooui:logo-media-wiki",
	});
}

export default Component;
