import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp4di_bcc.css';
import '../../css/p/ptfawwbss.css';
import '../../css/j/j166m3kbz.css';
import '../../css/j/jq0e-acpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a yp4di_bcc"/><path class="ptfawwbss wm-k"/><path class="j166m3kbz wm-k"/><path class="jq0e-acpr wm-s"/>`,
		"fallback": "withicons-bauhaus:microphone-off",
	});
}

export default Component;
