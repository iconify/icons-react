import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9ecpioam.css';
import '../../css/e/emdzlabdw.css';
import '../../css/y/yqkskmb2o.css';
import '../../css/h/hi1pddb_p.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/i9eahv9rf.css';
import '../../css/d/d8h49tnfx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9ecpioam"/><path class="emdzlabdw"/><path class="yqkskmb2o"/><path class="hi1pddb_p"/><g class="jn8qy4bru"><path class="i9eahv9rf"/><path class="d8h49tnfx"/></g>`,
		"fallback": "openmoji:syringe",
	});
}

export default Component;
