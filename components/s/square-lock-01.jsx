import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q37yj5bai.css';
import '../../css/z/zos5uc49n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q37yj5bai"/><path class="zos5uc49n"/></g>`,
		"fallback": "hugeicons:square-lock-01",
	});
}

export default Component;
