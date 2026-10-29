import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pcxdo28jt.css';
import '../../css/i/iz8w4e7ux.css';
import '../../css/f/folfl_fvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pcxdo28jt"/><path class="iz8w4e7ux"/><path class="folfl_fvi wm-a"/></g>`,
		"fallback": "withicons:snow-globe",
	});
}

export default Component;
