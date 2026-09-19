import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdk_g3xvk.css';
import '../../css/o/ok_35jzyh.css';
import '../../css/q/qv0rtbbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wdk_g3xvk"/><circle class="ok_35jzyh"/><path class="qv0rtbbbx"/></g>`,
		"fallback": "iconamoon:settings-duotone",
	});
}

export default Component;
