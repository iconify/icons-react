import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/m/mb5m2wb9f.css';
import '../../css/e/eksr6el1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="mb5m2wb9f"/><path class="eksr6el1o"/></g>`,
		"fallback": "codex:link",
	});
}

export default Component;
