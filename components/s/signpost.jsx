import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qc0zm1_pw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><polygon points="1.75 9.25 12.25 9.25 14.25 7 12.25 4.75 1.75 4.75"/><path class="qc0zm1_pw"/></g>`,
		"fallback": "charm:signpost",
	});
}

export default Component;
