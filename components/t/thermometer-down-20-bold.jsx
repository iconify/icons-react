import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1c9zmbsp.css';
import '../../css/l/lwy4_6bpt.css';
import '../../css/e/ex7ic0gtg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1c9zmbsp"/><path class="lwy4_6bpt"/><path class="ex7ic0gtg"/>`,
		"fallback": "energy-icons:thermometer-down-20-bold",
	});
}

export default Component;
