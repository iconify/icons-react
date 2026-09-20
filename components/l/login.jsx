import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/st3a4ib_h.css';
import '../../css/d/dv4gr9bmd.css';
import '../../css/h/hav7c1hub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="st3a4ib_h"/><path class="dv4gr9bmd"/><path class="hav7c1hub"/></g>`,
		"fallback": "mage:login",
	});
}

export default Component;
