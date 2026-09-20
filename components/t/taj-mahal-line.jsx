import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqo2dvk4m.css';
import '../../css/p/p1l0ufzst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqo2dvk4m"/><path class="p1l0ufzst"/>`,
		"fallback": "mingcute:taj-mahal-line",
	});
}

export default Component;
