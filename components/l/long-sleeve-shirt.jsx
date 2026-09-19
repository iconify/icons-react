import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p-2b63b8i.css';
import '../../css/q/qnpqtcbjn.css';
import '../../css/j/jxwumcbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p-2b63b8i"/><path class="qnpqtcbjn"/><path class="jxwumcbuv"/></g>`,
		"fallback": "hugeicons:long-sleeve-shirt",
	});
}

export default Component;
