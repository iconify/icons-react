import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vbc_1fbpw.css';
import '../../css/f/f5v-3obno.css';
import '../../css/t/t_rc37vcj.css';
import '../../css/m/mzkugvbxs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vbc_1fbpw"/><path class="f5v-3obno"/><path class="t_rc37vcj"/><path class="mzkugvbxs"/></g>`,
		"fallback": "streamline-flex-color:school-bus-side",
	});
}

export default Component;
