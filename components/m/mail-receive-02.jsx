import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tjin8obun.css';
import '../../css/n/ny4gbrx6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tjin8obun"/><path class="ny4gbrx6d"/></g>`,
		"fallback": "hugeicons:mail-receive-02",
	});
}

export default Component;
