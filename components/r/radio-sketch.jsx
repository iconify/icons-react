import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/szgntebkh.css';
import '../../css/j/j58s40qqs.css';
import '../../css/g/g36yryw5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="szgntebkh wm-a"/><path class="j58s40qqs wm-k"/><path class="g36yryw5e wm-a"/></g>`,
		"fallback": "withicons:radio-sketch",
	});
}

export default Component;
