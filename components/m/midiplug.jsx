import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hl3svbcdj.css';
import '../../css/x/xxvbpibda.css';
import '../../css/y/yervk3lwl.css';
import '../../css/k/kmyud_-jp.css';
import '../../css/t/t7tcbzb1p.css';
import '../../css/y/y6a8gcbbg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hl3svbcdj"/><circle class="xxvbpibda"/><circle class="yervk3lwl"/><circle class="kmyud_-jp"/><circle class="t7tcbzb1p"/><circle class="y6a8gcbbg"/></g>`,
		"fallback": "fad:midiplug",
	});
}

export default Component;
