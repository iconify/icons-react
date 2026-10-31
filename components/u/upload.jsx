import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i3eprdb7h.css';
import '../../css/z/zdmlo7ael.css';
import '../../css/o/ox649ehdc.css';
import '../../css/k/kmg-puiou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="i3eprdb7h wm-shadow"/><path class="wm-shadow zdmlo7ael"/><path class="ox649ehdc"/><path class="kmg-puiou"/></g>`,
		"fallback": "withicons-brutal:upload",
	});
}

export default Component;
