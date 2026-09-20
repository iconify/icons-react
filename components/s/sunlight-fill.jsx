import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as3fepoct.css';
import '../../css/l/lok12tb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="as3fepoct"/><path class="lok12tb_j"/></g>`,
		"fallback": "lets-icons:sunlight-fill",
	});
}

export default Component;
