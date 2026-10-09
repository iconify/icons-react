import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn92pkbuc.css';
import '../../css/m/myl9aibrd.css';
import '../../css/e/etzqvpx1q.css';
import '../../css/n/nt1j3jajj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn92pkbuc"/><path class="myl9aibrd"/><path class="etzqvpx1q"/><path class="nt1j3jajj"/>`,
		"fallback": "energy-icons:pylon-20-bold",
	});
}

export default Component;
