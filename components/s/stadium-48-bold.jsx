import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf4iecijn.css';
import '../../css/y/ylwrz8bdu.css';
import '../../css/a/a9vul7b8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf4iecijn"/><path class="ylwrz8bdu"/><path class="a9vul7b8u"/>`,
		"fallback": "energy-icons:stadium-48-bold",
	});
}

export default Component;
