import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhosa7bxx.css';
import '../../css/w/wdf-683ve.css';
import '../../css/g/gvn7998hr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGGql3Mc2V" viewBox="0 0 214.3 140.1"><path class="fhosa7bxx"/></symbol><symbol id="SVGLlWB2cAN" viewBox="0 0 359 231"><path class="wdf-683ve"/></symbol><symbol id="SVGtlWWFd9k" viewBox="0 0 447.7 371.5"><g clip-path="url(#SVGbs3NKdtF)"><use width="214.3" height="140.1" href="#SVGGql3Mc2V" transform="translate(195.51 165.01)"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"/></use></g><use width="359" height="231" href="#SVGLlWB2cAN" transform="translate(0 140.5)"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"/></use></symbol><clipPath id="SVGbs3NKdtF"><path class="gvn7998hr"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"/></path></clipPath></defs><use width="447.7" height="371.5" href="#SVGtlWWFd9k" transform="translate(64.34)"/>`,
		"fallback": "meteocons:overcast",
	});
}

export default Component;
