import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txoun62ha.css';
import '../../css/e/et5ntprfl.css';
import '../../css/l/l9k2yacns.css';
import '../../css/v/v-0w_5bex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txoun62ha"/><path class="et5ntprfl"/><path class="l9k2yacns"/><path class="v-0w_5bex"/>`,
		"fallback": "energy-icons:sim-card-48-bold",
	});
}

export default Component;
