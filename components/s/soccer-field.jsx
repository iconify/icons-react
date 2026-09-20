import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yytukcc2b.css';
import '../../css/q/qk7c1jbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yytukcc2b"/><path class="qk7c1jbiv"/></g>`,
		"fallback": "streamline-ultimate:soccer-field",
	});
}

export default Component;
