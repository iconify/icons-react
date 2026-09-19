import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aqgywl1mc.css';
import '../../css/w/w31ao1ksi.css';
import '../../css/y/yk4_q2j7g.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="aqgywl1mc"/><path class="w31ao1ksi"/><path class="yk4_q2j7g"/></g>`,
		"fallback": "fad:repeat-one",
	});
}

export default Component;
