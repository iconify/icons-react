import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lg3q93bem.css';
import '../../css/y/y0808qx6x.css';
import '../../css/m/m34862bjd.css';
import '../../css/p/pj5163b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lg3q93bem"/><path class="y0808qx6x"/><path class="m34862bjd"/><path class="pj5163b2h"/></g>`,
		"fallback": "streamline-freehand-color:memory-sd-card-settings",
	});
}

export default Component;
