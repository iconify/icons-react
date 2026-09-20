import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9qsbpbzw.css';
import '../../css/h/h01-jxany.css';
import '../../css/e/e7304gbzl.css';
import '../../css/n/n2o0epvqg.css';
import '../../css/i/i2kjsom5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGMICv9dhY" viewBox="0 0 178 178"><path class="z9qsbpbzw"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"/></path></symbol><symbol id="SVGfxACtb4E" viewBox="0 0 72 168"><circle class="h01-jxany"/><path class="e7304gbzl"><animateTransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"/></path></symbol><symbol id="SVGyUQRqbXk" viewBox="0 0 118 278"><path class="n2o0epvqg"/></symbol><symbol id="SVG7WuMycTc" viewBox="0 0 118 278"><use width="72" height="168" href="#SVGfxACtb4E" transform="translate(23 87)"/><use width="118" height="278" href="#SVGyUQRqbXk"/></symbol><clipPath id="SVGhmqlMeld"><path class="i2kjsom5t"/></clipPath></defs><g clip-path="url(#SVGhmqlMeld)"><use width="178" height="178" href="#SVGMICv9dhY" transform="translate(225 117)"/></g><use width="118" height="278" href="#SVG7WuMycTc" transform="translate(197 117)"/>`,
		"fallback": "meteocons:thermometer-moon",
	});
}

export default Component;
