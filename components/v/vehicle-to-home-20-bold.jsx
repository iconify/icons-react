import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sflgm1xrv.css';
import '../../css/a/awkb24b_h.css';
import '../../css/y/y6syetncv.css';
import '../../css/c/c3totsbmy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sflgm1xrv"/><path class="awkb24b_h"/><path class="y6syetncv"/><path class="c3totsbmy"/>`,
		"fallback": "energy-icons:vehicle-to-home-20-bold",
	});
}

export default Component;
