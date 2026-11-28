import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wlah1cbhg.css';
import '../../css/r/rhsxb9bdp.css';
import '../../css/h/husi78b2l.css';
import '../../css/x/xfyd-ebwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wlah1cbhg"/><path class="rhsxb9bdp"/><path class="husi78b2l"/><path class="xfyd-ebwc"/></g>`,
		"fallback": "iconaut:list-checks",
	});
}

export default Component;
