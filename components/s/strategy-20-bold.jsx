import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7qbyuxuw.css';
import '../../css/e/eolgfe9_w.css';
import '../../css/n/nqz5vbbsk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7qbyuxuw"/><path class="eolgfe9_w"/><path class="nqz5vbbsk"/>`,
		"fallback": "energy-icons:strategy-20-bold",
	});
}

export default Component;
