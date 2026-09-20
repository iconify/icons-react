import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/u/uifzf81kd.css';
import '../../css/l/lvunf81kr.css';
import '../../css/m/mupqf7bjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="uifzf81kd"/><path class="lvunf81kr"/><path class="mupqf7bjj"/></g>`,
		"fallback": "mage:message-question-mark",
	});
}

export default Component;
