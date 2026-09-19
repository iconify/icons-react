import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bdsgm0b0w.css';
import '../../css/z/zos5uc49n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bdsgm0b0w"/><path class="zos5uc49n"/></g>`,
		"fallback": "hugeicons:square-lock-password",
	});
}

export default Component;
