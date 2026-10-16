import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh5sn9n9c.css';
import '../../css/d/d1xxgk97m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh5sn9n9c"/><path class="d1xxgk97m"/>`,
		"fallback": "energy-icons:rack-and-pinion-20",
	});
}

export default Component;
