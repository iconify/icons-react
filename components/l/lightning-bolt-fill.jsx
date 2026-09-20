import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzwgp8pmp.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/l/le-qv1b7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGvnYDXzed" x1="8.7" x2="80.9" y1="17.1" y2="142.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="mzwgp8pmp"/><stop offset=".5" class="mzwgp8pmp"/><stop offset="1" class="fqk8mibcy"/></linearGradient><symbol id="SVGpUv0Udwf" viewBox="0 0 102.7 186.8"><path fill="url(#SVGvnYDXzed)" class="le-qv1b7l"><animate id="SVGbxDaaeoE" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"/></path></symbol></defs><use width="102.7" height="186.7" href="#SVGpUv0Udwf" transform="translate(186.37 130)scale(1.36)"/>`,
		"fallback": "meteocons:lightning-bolt-fill",
	});
}

export default Component;
