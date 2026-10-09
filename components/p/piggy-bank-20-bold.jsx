import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxv1t9l-s.css';
import '../../css/t/tlriecbtf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxv1t9l-s"/><path class="tlriecbtf"/>`,
		"fallback": "energy-icons:piggy-bank-20-bold",
	});
}

export default Component;
