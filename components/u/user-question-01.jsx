import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cxx-j6p5y.css';
import '../../css/q/qc92licjy.css';
import '../../css/o/ov-olib_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cxx-j6p5y"/><circle class="qc92licjy"/><path class="ov-olib_p"/></g>`,
		"fallback": "hugeicons:user-question-01",
	});
}

export default Component;
