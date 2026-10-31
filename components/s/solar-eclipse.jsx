import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlj0scbpf.css';
import '../../css/d/d-2gb0bhq.css';
import '../../css/z/zfjgl05hi.css';
import '../../css/f/fms0nebmr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGK9G88drL" viewBox="0 0 375 375"><circle class="vlj0scbpf"/><path class="d-2gb0bhq"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"/></path></symbol><symbol id="SVGITM2n4vB" viewBox="0 0 279 279"><path class="zfjgl05hi"/></symbol><clipPath id="SVGjqroGdXu"><path class="fms0nebmr"/></clipPath></defs><g clip-path="url(#SVGjqroGdXu)"><use width="375" height="375" href="#SVGK9G88drL" transform="translate(74.5 76.5)"/></g><use width="279" height="279" href="#SVGITM2n4vB" transform="translate(116.5 116.5)"/>`,
		"fallback": "meteocons:solar-eclipse",
	});
}

export default Component;
