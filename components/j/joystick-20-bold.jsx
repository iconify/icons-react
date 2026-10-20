import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp7d7nb3s.css';
import '../../css/v/vqqrrtxdj.css';
import '../../css/a/a0erdxoze.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp7d7nb3s"/><path class="vqqrrtxdj"/><path class="a0erdxoze"/>`,
		"fallback": "energy-icons:joystick-20-bold",
	});
}

export default Component;
