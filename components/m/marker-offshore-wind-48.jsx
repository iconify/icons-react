import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9v855hut.css';
import '../../css/z/z16x8k2ie.css';
import '../../css/m/m-t084bdp.css';
import '../../css/m/my95-kbph.css';
import '../../css/g/gcycwt72m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9v855hut"/><path class="z16x8k2ie"/><path class="m-t084bdp"/><path class="my95-kbph"/><path class="gcycwt72m"/>`,
		"fallback": "energy-icons:marker-offshore-wind-48",
	});
}

export default Component;
