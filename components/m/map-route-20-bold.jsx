import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfl834tqx.css';
import '../../css/j/j77zeoa7b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfl834tqx"/><path class="j77zeoa7b"/>`,
		"fallback": "energy-icons:map-route-20-bold",
	});
}

export default Component;
