import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_rvpzb5b.css';
import '../../css/v/vtogzbcjl.css';
import '../../css/h/hyap0y3ki.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_rvpzb5b"/><path class="vtogzbcjl"/><path class="hyap0y3ki"/>`,
		"fallback": "energy-icons:switch-closed-20",
	});
}

export default Component;
