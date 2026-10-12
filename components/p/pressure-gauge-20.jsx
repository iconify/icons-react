import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwxtv1bud.css';
import '../../css/y/y3799mbrd.css';
import '../../css/w/wix60v6xk.css';
import '../../css/w/w-bdeccnj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwxtv1bud"/><path class="y3799mbrd"/><path class="wix60v6xk"/><path class="w-bdeccnj"/>`,
		"fallback": "energy-icons:pressure-gauge-20",
	});
}

export default Component;
