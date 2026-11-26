import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-npdpb0r.css';
import '../../css/y/ycfs5r48t.css';
import '../../css/i/i-s49165o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j-npdpb0r"><path class="ycfs5r48t"/><path class="i-s49165o"/></g>`,
		"fallback": "xero-emoji:speech-balloon",
	});
}

export default Component;
