import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/txnx89bcx.css';
import '../../css/u/u2eyoogus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="txnx89bcx"/><path class="u2eyoogus"/></g>`,
		"fallback": "hugeicons:wallet-done-02",
	});
}

export default Component;
