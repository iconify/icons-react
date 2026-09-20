import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gf1ywqqzp.css';
import '../../css/a/a7q38xqfh.css';
import '../../css/h/hqlq2ab-c.css';
import '../../css/q/qm6-ak8nt.css';
import '../../css/a/ah141qbsy.css';
import '../../css/h/hzn_f-hlg.css';
import '../../css/m/m3xnihlsu.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gf1ywqqzp"/><path class="a7q38xqfh"/><path class="hqlq2ab-c"/><path class="qm6-ak8nt"/><path class="ah141qbsy"/><path class="hzn_f-hlg"/><path class="m3xnihlsu"/></g>`,
		"fallback": "streamline-stickies-color:passport",
	});
}

export default Component;
