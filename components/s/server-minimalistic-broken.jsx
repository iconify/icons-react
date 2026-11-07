import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r4k8mq4az.css';
import '../../css/d/dg5sb_lqv.css';
import '../../css/c/c7na9qbzc.css';
import '../../css/z/zg6czpbke.css';
import '../../css/g/gr7n79p7s.css';
import '../../css/m/mi3lwbbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r4k8mq4az"/><path class="dg5sb_lqv"/><path class="c7na9qbzc"/><path class="zg6czpbke"/><path class="gr7n79p7s"/><path class="mi3lwbbbt"/></g>`,
		"fallback": "solar:server-minimalistic-broken",
	});
}

export default Component;
