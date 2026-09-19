import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fhzkr4_3z.css';
import '../../css/n/npzbi206w.css';
import '../../css/q/qtxsezbbm.css';
import '../../css/o/o1u583b9p.css';
import '../../css/v/v2dxglbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="fhzkr4_3z"/><circle class="npzbi206w"/><circle class="qtxsezbbm"/><circle class="o1u583b9p"/><path class="v2dxglbqj"/></g>`,
		"fallback": "hugeicons:molecules",
	});
}

export default Component;
