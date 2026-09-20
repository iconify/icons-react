import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/w/w2qwfjjgf.css';
import '../../css/n/ny7lf8h0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="w2qwfjjgf"/><path class="ny7lf8h0w"/></g>`,
		"fallback": "lets-icons:ticket-alt",
	});
}

export default Component;
