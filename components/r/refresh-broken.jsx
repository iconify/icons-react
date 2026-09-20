import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fyulbt9hy.css';
import '../../css/k/kb74m1oom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fyulbt9hy"/><path class="kb74m1oom"/></g>`,
		"fallback": "solar:refresh-broken",
	});
}

export default Component;
