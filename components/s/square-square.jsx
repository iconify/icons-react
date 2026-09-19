import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lhszwxb7f.css';
import '../../css/u/uklsy3_6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lhszwxb7f"/><path class="uklsy3_6m"/></g>`,
		"fallback": "hugeicons:square-square",
	});
}

export default Component;
