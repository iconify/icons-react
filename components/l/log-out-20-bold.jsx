import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkfvnlevf.css';
import '../../css/m/mzr03n29o.css';
import '../../css/m/meohbdg3a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkfvnlevf"/><path class="mzr03n29o"/><path class="meohbdg3a"/>`,
		"fallback": "energy-icons:log-out-20-bold",
	});
}

export default Component;
