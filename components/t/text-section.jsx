import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qhjd7-blc.css';
import '../../css/x/xe9kqvbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qhjd7-blc"/><path class="xe9kqvbgo"/></g>`,
		"fallback": "andrsrxn:text-section",
	});
}

export default Component;
