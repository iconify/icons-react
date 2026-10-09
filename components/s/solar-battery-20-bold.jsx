import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wht6-eeil.css';
import '../../css/y/y3tufnbaa.css';
import '../../css/c/cw-o4ybrh.css';
import '../../css/k/kj4pd_xxo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wht6-eeil"/><path class="y3tufnbaa"/><path class="cw-o4ybrh"/><path class="kj4pd_xxo"/>`,
		"fallback": "energy-icons:solar-battery-20-bold",
	});
}

export default Component;
