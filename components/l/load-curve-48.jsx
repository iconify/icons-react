import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv4k_bcjk.css';
import '../../css/k/kpfwnqb5i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv4k_bcjk"/><path class="kpfwnqb5i"/>`,
		"fallback": "energy-icons:load-curve-48",
	});
}

export default Component;
