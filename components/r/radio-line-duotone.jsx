import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/h/hme959bub.css';
import '../../css/d/dn6v61b9t.css';
import '../../css/m/mlbrz3ncq.css';
import '../../css/h/h6e5_kbbf.css';
import '../../css/n/n787bfb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xl-jlp1rp"/><path class="hme959bub"/><path class="dn6v61b9t"/><path class="mlbrz3ncq"/><path class="h6e5_kbbf"/><path class="n787bfb7v"/></g>`,
		"fallback": "solar:radio-line-duotone",
	});
}

export default Component;
