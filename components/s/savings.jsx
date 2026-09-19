import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lhqq2crmo.css';
import '../../css/m/mt6aazbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lhqq2crmo"/><path class="mt6aazbbv"/></g>`,
		"fallback": "hugeicons:savings",
	});
}

export default Component;
