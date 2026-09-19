import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgrl0-2cq.css';
import '../../css/n/nkchmbc-t.css';
import '../../css/c/c8pavbbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG9DPAsdPE)" class="pgrl0-2cq"/><defs><linearGradient id="SVG9DPAsdPE" x1="-4.429" x2="3.504" y1="2.625" y2="26.481" gradientUnits="userSpaceOnUse"><stop class="nkchmbc-t"/><stop offset="1" class="c8pavbbjd"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:link-24",
	});
}

export default Component;
