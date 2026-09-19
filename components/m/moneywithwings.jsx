import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ece_obukg.css';
import '../../css/d/d-c_9e2ou.css';
import '../../css/x/x3lv_0s-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ece_obukg"/><path class="d-c_9e2ou"/><path class="x3lv_0s-z"/>`,
		"fallback": "fxemoji:moneywithwings",
	});
}

export default Component;
