import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgbaqzbcl.css';
import '../../css/y/yurlis35z.css';
import '../../css/e/efp1h8bop.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgbaqzbcl"/><path class="yurlis35z"/><path class="efp1h8bop"/>`,
		"fallback": "selfhst:mailrise-dark",
	});
}

export default Component;
