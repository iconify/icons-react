import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo64yvbkk.css';
import '../../css/g/gsxa1w5va.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo64yvbkk"/><path class="gsxa1w5va"/>`,
		"fallback": "energy-icons:pen-48",
	});
}

export default Component;
