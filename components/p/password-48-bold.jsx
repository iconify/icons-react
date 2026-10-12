import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiqj48bop.css';
import '../../css/a/ahgdhlcfp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiqj48bop"/><path class="ahgdhlcfp"/>`,
		"fallback": "energy-icons:password-48-bold",
	});
}

export default Component;
