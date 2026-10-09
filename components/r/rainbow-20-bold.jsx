import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwm1rebcn.css';
import '../../css/v/vc21ghbwp.css';
import '../../css/n/nfrz65yag.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwm1rebcn"/><path class="vc21ghbwp"/><path class="nfrz65yag"/>`,
		"fallback": "energy-icons:rainbow-20-bold",
	});
}

export default Component;
