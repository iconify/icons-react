import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8l6c1b3k.css';
import '../../css/n/nkchmbc-t.css';
import '../../css/c/c8pavbbjd.css';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG9H1iteHl)" class="p8l6c1b3k"/><defs><linearGradient id="SVG9H1iteHl" x1="-5.714" x2="3.805" y1="2.75" y2="31.377" gradientUnits="userSpaceOnUse"><stop class="nkchmbc-t"/><stop offset="1" class="c8pavbbjd"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:link-28",
	});
}

export default Component;
