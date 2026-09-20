import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/p/pd_pbfaog.css';
import '../../css/z/zyzap34-z.css';
import '../../css/i/ircox2y5z.css';
import '../../css/j/j8cgqw99q.css';
import '../../css/n/n787bfb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xl-jlp1rp"/><circle class="pd_pbfaog"/><path class="zyzap34-z"/><path class="ircox2y5z"/><path class="j8cgqw99q"/><path class="n787bfb7v"/></g>`,
		"fallback": "solar:radio-minimalistic-line-duotone",
	});
}

export default Component;
