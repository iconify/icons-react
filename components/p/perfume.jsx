import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bt0_qpv5c.css';
import '../../css/a/asb5nb7rr.css';
import '../../css/x/xcqey-j4d.css';
import '../../css/q/q4kdvccmb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="bt0_qpv5c"/><rect class="asb5nb7rr"/><path class="xcqey-j4d"/><path class="q4kdvccmb"/></g>`,
		"fallback": "icon-park:perfume",
	});
}

export default Component;
