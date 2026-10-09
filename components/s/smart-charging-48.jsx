import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzvl6-gkr.css';
import '../../css/x/x-s9mn_cg.css';
import '../../css/r/r83jtnbma.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzvl6-gkr"/><path class="x-s9mn_cg"/><path class="r83jtnbma"/>`,
		"fallback": "energy-icons:smart-charging-48",
	});
}

export default Component;
