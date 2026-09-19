import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zos5uc49n.css';
import '../../css/b/bglxpfbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zos5uc49n"/><path class="bglxpfbve"/></g>`,
		"fallback": "hugeicons:lock-password",
	});
}

export default Component;
