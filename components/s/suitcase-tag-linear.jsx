import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/m/mxvnuacok.css';
import '../../css/k/klode0b5x.css';
import '../../css/t/t0r576ckt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xl-jlp1rp"/><path class="hq-5njbjh"/><path class="mxvnuacok"/><path class="klode0b5x"/><path class="t0r576ckt"/></g>`,
		"fallback": "solar:suitcase-tag-linear",
	});
}

export default Component;
