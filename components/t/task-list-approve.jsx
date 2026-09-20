import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oprzxd2wo.css';
import '../../css/r/rpahdwuwp.css';
import '../../css/d/dkkvodt2e.css';
import '../../css/a/au82tqb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="oprzxd2wo"/><path class="rpahdwuwp"/><path class="dkkvodt2e"/><path class="au82tqb8f"/></g>`,
		"fallback": "streamline-ultimate:task-list-approve",
	});
}

export default Component;
