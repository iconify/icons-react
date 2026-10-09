import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slbli-wlk.css';
import '../../css/t/tys-9ybqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slbli-wlk"/><path class="tys-9ybqc"/>`,
		"fallback": "energy-icons:mountain-snow-48",
	});
}

export default Component;
