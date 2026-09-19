import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qywg_65qg.css';
import '../../css/m/mmnw4pstj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qywg_65qg"/><path class="mmnw4pstj"/></g>`,
		"fallback": "cryptocurrency-color:sai",
	});
}

export default Component;
