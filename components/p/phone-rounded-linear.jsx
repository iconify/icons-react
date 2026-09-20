import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/im7ue1byo.css';
import '../../css/s/s3wvs26kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="im7ue1byo"/><path class="s3wvs26kf"/></g>`,
		"fallback": "solar:phone-rounded-linear",
	});
}

export default Component;
