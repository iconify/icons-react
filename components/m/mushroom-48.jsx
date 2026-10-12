import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfyu3jekb.css';
import '../../css/f/fc-7_47pi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfyu3jekb"/><path class="fc-7_47pi"/>`,
		"fallback": "energy-icons:mushroom-48",
	});
}

export default Component;
