import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8lzt5lna.css';
import '../../css/m/mvzjp1byq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8lzt5lna"/><path class="mvzjp1byq"/>`,
		"fallback": "energy-icons:move-vertical-20-bold",
	});
}

export default Component;
