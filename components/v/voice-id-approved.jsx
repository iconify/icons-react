import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p4g_4cisr.css';
import '../../css/s/s442hgbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p4g_4cisr"/><path class="s442hgbhw"/></g>`,
		"fallback": "streamline-freehand:voice-id-approved",
	});
}

export default Component;
