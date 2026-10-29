import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/db4y25bpl.css';
import '../../css/w/ws80tf5yb.css';
import '../../css/r/rpdqoma1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="db4y25bpl"/><path class="wm-k ws80tf5yb"/><path class="rpdqoma1e wm-a"/></g>`,
		"fallback": "withicons:sun-dim-sketch",
	});
}

export default Component;
