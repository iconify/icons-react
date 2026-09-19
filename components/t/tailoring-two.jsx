import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inw8f8fxw.css';
import '../../css/f/fp4p4_9zd.css';
import '../../css/d/ddortzb1l.css';
import '../../css/v/v1bs-wbdv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="inw8f8fxw"/><path class="fp4p4_9zd"/><path class="ddortzb1l"/><path class="v1bs-wbdv"/></g>`,
		"fallback": "icon-park-outline:tailoring-two",
	});
}

export default Component;
