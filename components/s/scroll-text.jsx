import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ns9jj4kof.css';
import '../../css/o/o9vamtjsz.css';
import '../../css/a/avqhs9bcw.css';
import '../../css/y/yy2za8vpd.css';
import '../../css/b/bdse06bqb.css';
import '../../css/f/fq484qzxr.css';
import '../../css/u/ufxjbbb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ns9jj4kof wm-k"/><path class="o9vamtjsz wm-deco"/><path class="avqhs9bcw wm-k"/><path class="wm-k yy2za8vpd"/><path class="bdse06bqb wm-shadow"/><path class="fq484qzxr wm-shine"/><path class="ufxjbbb4l wm-shine"/></g>`,
		"fallback": "withicons-valentine:scroll-text",
	});
}

export default Component;
