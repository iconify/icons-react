import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pxkpnop3z.css';
import '../../css/l/l-t96g0gw.css';
import '../../css/x/x4w0-dtwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="pxkpnop3z"/><path class="l-t96g0gw"/><path class="x4w0-dtwe"/></g>`,
		"fallback": "icon-park:water-no",
	});
}

export default Component;
