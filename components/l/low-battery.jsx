import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c87o6pbte.css';
import '../../css/m/mfap_hbod.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/c/cuy0u_kfh.css';
import '../../css/g/gxk1hu3mk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c87o6pbte"/><path class="mfap_hbod"/><g class="jn8qy4bru"><path class="cuy0u_kfh"/><path class="gxk1hu3mk"/></g>`,
		"fallback": "openmoji:low-battery",
	});
}

export default Component;
