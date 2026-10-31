import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhosa7bxx.css';
import '../../css/w/wdf-683ve.css';
import '../../css/b/bbniaqbna.css';
import '../../css/x/x_zi4lbhl.css';
import '../../css/g/gvn7998hr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVG9e2SRL8f" viewBox="0 0 214.3 140.1"><path class="fhosa7bxx"/></symbol><symbol id="SVGywfqvcxz" viewBox="0 0 359 231"><path class="wdf-683ve"/></symbol><symbol id="SVG5gW5CdaG" viewBox="0 0 447.7 371.5"><g clip-path="url(#SVGS8hsB4qe)"><use width="214.3" height="140.1" href="#SVG9e2SRL8f" transform="translate(195.51 165.01)"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"/></use></g><use width="359" height="231" href="#SVGywfqvcxz" transform="translate(0 140.5)"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"/></use></symbol><symbol id="SVGai6YxWVZ" viewBox="0 0 258 66"><path class="bbniaqbna"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"/></path><path class="x_zi4lbhl"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"/></path></symbol><clipPath id="SVGS8hsB4qe"><path class="gvn7998hr"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"/></path></clipPath></defs><use width="447.7" height="371.5" href="#SVG5gW5CdaG" transform="translate(64.34)"/><use width="258" height="66" href="#SVGai6YxWVZ" transform="translate(127 405)"/>`,
		"fallback": "meteocons:overcast-fog",
	});
}

export default Component;
