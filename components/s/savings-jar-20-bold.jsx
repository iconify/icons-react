import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtdrk6b1n.css';
import '../../css/m/moe3g5b7s.css';
import '../../css/h/hvh37gb8j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtdrk6b1n"/><path class="moe3g5b7s"/><path class="hvh37gb8j"/>`,
		"fallback": "energy-icons:savings-jar-20-bold",
	});
}

export default Component;
