import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c4cemkb3l.css';
import '../../css/x/x4e7n4bue.css';
import '../../css/e/epff7linm.css';
import '../../css/a/a8hlhbciu.css';
import '../../css/u/ucqh13b_i.css';
import '../../css/b/b2dtoybbc.css';
import '../../css/u/u2yolvbhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c4cemkb3l"/><path class="wm-k x4e7n4bue"/><path class="epff7linm wm-a"/><path class="a8hlhbciu wm-s"/><path class="ucqh13b_i wm-k"/><path class="b2dtoybbc wm-a"/><path class="u2yolvbhr wm-s"/></g>`,
		"fallback": "withicons:mail-x-sketch",
	});
}

export default Component;
