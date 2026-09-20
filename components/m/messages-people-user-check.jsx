import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/myj07eb3f.css';
import '../../css/o/onug22b0j.css';
import '../../css/y/ycdmvebni.css';
import '../../css/l/lqizmi5wo.css';
import '../../css/s/sx315jgmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="myj07eb3f"/><path class="onug22b0j"/><path class="ycdmvebni"/><path class="lqizmi5wo"/><path class="sx315jgmd"/></g>`,
		"fallback": "streamline-ultimate-color:messages-people-user-check",
	});
}

export default Component;
