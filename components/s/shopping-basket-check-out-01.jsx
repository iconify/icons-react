import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/ftrpiw36b.css';
import '../../css/q/qr5olie7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ftrpiw36b"/><path class="qr5olie7t"/></g>`,
		"fallback": "hugeicons:shopping-basket-check-out-01",
	});
}

export default Component;
