import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a_0c-vozs.css';
import '../../css/n/nexbjnbng.css';
import '../../css/r/rkrwd5pdm.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/y/ybhe00r-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a_0c-vozs"/><path class="nexbjnbng wm-s"/><path class="rkrwd5pdm wm-s"/><path class="ljeitrr-k"/><path class="wm-a ybhe00r-q"/></g>`,
		"fallback": "withicons:user-lock-duo",
	});
}

export default Component;
