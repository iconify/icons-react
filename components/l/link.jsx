import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd_rk-b_e.css';
import '../../css/g/ggn80i4hk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd_rk-b_e"/><path class="ggn80i4hk"/>`,
		"fallback": "carbon:link",
	});
}

export default Component;
