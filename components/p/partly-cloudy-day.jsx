import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvfd0ac0r.css';
import '../../css/u/uih-2ib5h.css';
import '../../css/w/wdf-683ve.css';
import '../../css/k/kviuzd8ma.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVG7LDBabQh" viewBox="0 0 193 193"><circle class="fvfd0ac0r"/><path class="uih-2ib5h"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"/></path></symbol><symbol id="SVGLlWB2cAN" viewBox="0 0 359 231"><path class="wdf-683ve"/></symbol><symbol id="SVGReNHveYA" viewBox="0 0 435.5 371.5"><g clip-path="url(#SVGab30RcjT)"><use width="193" height="193" href="#SVG7LDBabQh" transform="translate(69.5 110.5)"/></g><use width="359" height="231" href="#SVGLlWB2cAN" transform="translate(76.5 140.5)"/></symbol><clipPath id="SVGab30RcjT"><path class="kviuzd8ma"/></clipPath></defs><use width="435.5" height="371.5" href="#SVGReNHveYA"/>`,
		"fallback": "meteocons:partly-cloudy-day",
	});
}

export default Component;
