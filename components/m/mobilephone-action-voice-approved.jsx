import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i22zdvbaq.css';
import '../../css/d/dkjf21ajk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i22zdvbaq"/><path class="dkjf21ajk"/></g>`,
		"fallback": "streamline-freehand:mobilephone-action-voice-approved",
	});
}

export default Component;
