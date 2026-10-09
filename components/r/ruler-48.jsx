import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fggx0lbvr.css';
import '../../css/q/q01m64b9h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fggx0lbvr"/><path class="q01m64b9h"/>`,
		"fallback": "energy-icons:ruler-48",
	});
}

export default Component;
