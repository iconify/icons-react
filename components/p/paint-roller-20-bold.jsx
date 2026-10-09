import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it8r15bsj.css';
import '../../css/r/rk4fbbbyc.css';
import '../../css/p/pneyzwbuq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it8r15bsj"/><path class="rk4fbbbyc"/><path class="pneyzwbuq"/>`,
		"fallback": "energy-icons:paint-roller-20-bold",
	});
}

export default Component;
