import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c32l_ab_t.css';
import '../../css/y/yw2r-p6cc.css';
import '../../css/q/quz6tn28w.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/tg-jgkbxj.css';
import '../../css/b/bk6jshypl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c32l_ab_t"/><path class="yw2r-p6cc"/><path class="quz6tn28w"/><g class="ij2x_72vy"><path class="tg-jgkbxj"/><path class="bk6jshypl"/></g>`,
		"fallback": "openmoji:safety",
	});
}

export default Component;
