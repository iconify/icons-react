import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vr_l94bnf.css';
import '../../css/g/gpa38qbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vr_l94bnf"/><path class="gpa38qbcg"/></g>`,
		"fallback": "hugeicons:receipt-euro",
	});
}

export default Component;
