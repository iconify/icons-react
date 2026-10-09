import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp1m28b3m.css';
import '../../css/c/cm9yy8b4y.css';
import '../../css/w/wbx0tpvjg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp1m28b3m"/><path class="cm9yy8b4y"/><path class="wbx0tpvjg"/>`,
		"fallback": "energy-icons:scissors-20-bold",
	});
}

export default Component;
