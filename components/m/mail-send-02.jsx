import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tjin8obun.css';
import '../../css/c/cjbk8ba1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tjin8obun"/><path class="cjbk8ba1q"/></g>`,
		"fallback": "hugeicons:mail-send-02",
	});
}

export default Component;
