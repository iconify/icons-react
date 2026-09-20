import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p013inydy.css';
import '../../css/r/r1hf7ra_v.css';
import '../../css/w/w2ebhfe2p.css';
import '../../css/l/l00qf0e4o.css';
import '../../css/d/dtzfsfbqx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVG20UuIe1E"><path class="p013inydy"/></clipPath></defs><g clip-path="url(#SVG20UuIe1E)" transform="matrix(1.1304 0 0 -1.1304 5.714 82.137)"><g class="r1hf7ra_v"><path class="w2ebhfe2p"/><path class="l00qf0e4o"/><path class="dtzfsfbqx"/></g></g>`,
		"fallback": "material-icon-theme:protractor",
	});
}

export default Component;
