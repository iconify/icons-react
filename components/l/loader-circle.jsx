import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4xr3bbwi.css';
import '../../css/z/zvhid3bjr.css';
import '../../css/m/mis7vx5md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m4xr3bbwi wm-k"/><path class="wm-k zvhid3bjr"/><path class="mis7vx5md wm-k"/></g>`,
		"fallback": "withicons-anime:loader-circle",
	});
}

export default Component;
