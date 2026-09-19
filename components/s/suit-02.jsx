import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zgs-ldbpd.css';
import '../../css/g/g34o9bbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zgs-ldbpd"/><path class="g34o9bbkj"/></g>`,
		"fallback": "hugeicons:suit-02",
	});
}

export default Component;
