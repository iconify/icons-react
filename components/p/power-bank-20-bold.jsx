import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9wovjvct.css';
import '../../css/s/sx3zuyn8y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9wovjvct"/><path class="sx3zuyn8y"/>`,
		"fallback": "energy-icons:power-bank-20-bold",
	});
}

export default Component;
