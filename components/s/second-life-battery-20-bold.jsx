import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq-2zqbgl.css';
import '../../css/x/xny_r4baq.css';
import '../../css/m/muekd2yie.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq-2zqbgl"/><path class="xny_r4baq"/><path class="muekd2yie"/>`,
		"fallback": "energy-icons:second-life-battery-20-bold",
	});
}

export default Component;
