import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egqkt_b7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVG7V8H0dgo" viewBox="0 0 96 176"><path class="egqkt_b7m"><animate id="SVGbxDaaeoE" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"/></path></symbol></defs><use width="96" height="176" href="#SVG7V8H0dgo" transform="translate(190.13 132.72)scale(1.36)"/>`,
		"fallback": "meteocons:lightning-bolt",
	});
}

export default Component;
