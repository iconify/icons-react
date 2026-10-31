import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kdem0zbaa.css';
import '../../css/i/im4regb9x.css';
import '../../css/t/t9g5kvbye.css';
import '../../css/t/trdla8jeo.css';
import '../../css/m/mrkqmab9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kdem0zbaa"/><path class="im4regb9x wm-shine"/><path class="t9g5kvbye wm-k"/><path class="trdla8jeo wm-a"/><path class="mrkqmab9s wm-deco"/></g>`,
		"fallback": "withicons-kawaii:layout-list",
	});
}

export default Component;
