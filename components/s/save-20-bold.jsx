import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnwkubctl.css';
import '../../css/z/znrt3ccop.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnwkubctl"/><path class="znrt3ccop"/>`,
		"fallback": "energy-icons:save-20-bold",
	});
}

export default Component;
