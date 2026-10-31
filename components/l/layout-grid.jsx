import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sxk1gpbzj.css';
import '../../css/q/q20xhrbdl.css';
import '../../css/b/bqfneeboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sxk1gpbzj"/><path class="q20xhrbdl wm-shine"/><path class="bqfneeboe"/></g>`,
		"fallback": "withicons-kawaii:layout-grid",
	});
}

export default Component;
