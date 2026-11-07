import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mpd90kbpm.css';
import '../../css/d/d63opbmid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mpd90kbpm"/><path class="d63opbmid"/></g>`,
		"fallback": "solar:sticker-circle-line-duotone",
	});
}

export default Component;
