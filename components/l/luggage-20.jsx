import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv8y42b4f.css';
import '../../css/j/j79qmbgbf.css';
import '../../css/f/f2nkggpoe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv8y42b4f"/><path class="j79qmbgbf"/><path class="f2nkggpoe"/>`,
		"fallback": "energy-icons:luggage-20",
	});
}

export default Component;
