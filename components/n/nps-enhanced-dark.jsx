import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw_f9jbmc.css';
import '../../css/f/f1xyaebmo.css';
import '../../css/m/m2qk5o2nd.css';
import '../../css/c/crbo13bgz.css';
import '../../css/d/dy_nph56k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw_f9jbmc"/><path class="f1xyaebmo"/><path class="m2qk5o2nd"/><path class="crbo13bgz"/><path class="dy_nph56k"/>`,
		"fallback": "selfhst:nps-enhanced-dark",
	});
}

export default Component;
