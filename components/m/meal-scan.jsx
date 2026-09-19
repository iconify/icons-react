import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bqiwftbxg.css';
import '../../css/e/e1fmi_kkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bqiwftbxg"/><path class="e1fmi_kkv"/></g>`,
		"fallback": "hugeicons:meal-scan",
	});
}

export default Component;
