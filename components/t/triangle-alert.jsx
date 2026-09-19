import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/e/eha724bwj.css';
import '../../css/d/d_npnv-sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="eha724bwj"/><path class="d_npnv-sc"/></g>`,
		"fallback": "akar-icons:triangle-alert",
	});
}

export default Component;
