import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/ml8-7_rvn.css';
import '../../css/a/aymf1-buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ml8-7_rvn"/><path class="aymf1-buu"/></g>`,
		"fallback": "hugeicons:money-saving-jar",
	});
}

export default Component;
