import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edmy10b6v.css';
import '../../css/f/f0zhtgbge.css';
import '../../css/a/aeer8-hxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="edmy10b6v"/><path class="f0zhtgbge"/><path class="aeer8-hxy"/></g>`,
		"fallback": "andrsrxn:screencast",
	});
}

export default Component;
