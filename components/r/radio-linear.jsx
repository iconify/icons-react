import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/h/hme959bub.css';
import '../../css/w/w6ca74b2j.css';
import '../../css/s/smls78shz.css';
import '../../css/n/nau4w8dar.css';
import '../../css/n/n787bfb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xl-jlp1rp"/><path class="hme959bub"/><path class="w6ca74b2j"/><path class="smls78shz"/><path class="nau4w8dar"/><path class="n787bfb7v"/></g>`,
		"fallback": "solar:radio-linear",
	});
}

export default Component;
