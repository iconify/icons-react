import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qeerhub3d.css';
import '../../css/e/e_7yu7xyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qeerhub3d"/><path class="e_7yu7xyl"/></g>`,
		"fallback": "streamline-sharp-color:sizing-flat",
	});
}

export default Component;
