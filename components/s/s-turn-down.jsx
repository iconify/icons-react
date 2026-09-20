import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/weabemp1z.css';
import '../../css/i/ikqaqyboe.css';
import '../../css/h/hzwe0wbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="weabemp1z"/><path class="ikqaqyboe"/><path class="hzwe0wbyv"/></g>`,
		"fallback": "tabler:s-turn-down",
	});
}

export default Component;
