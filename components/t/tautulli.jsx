import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwtlcbcgl.css';
import '../../css/c/cbw46ub7s.css';

const viewBox = {"width":298.961,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwtlcbcgl"/><path class="cbw46ub7s"/>`,
		"fallback": "thesvg-color:tautulli",
	});
}

export default Component;
