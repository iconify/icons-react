import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4kqmebjo.css';
import '../../css/a/a-3y2gbgq.css';
import '../../css/k/k12_kcadb.css';
import '../../css/y/y-alb0bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k x4kqmebjo"/><path class="a-3y2gbgq wm-k"/><path class="k12_kcadb wm-shadow"/><path class="wm-shine y-alb0bnx"/></g>`,
		"fallback": "withicons-valentine:panel-top",
	});
}

export default Component;
