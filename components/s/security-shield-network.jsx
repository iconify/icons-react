import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7s8kco0k.css';
import '../../css/v/vehtb993a.css';
import '../../css/d/dc6ffkbpw.css';
import '../../css/t/ts2ahubly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w7s8kco0k"/><path class="vehtb993a"/><path class="dc6ffkbpw"/><path class="ts2ahubly"/></g>`,
		"fallback": "streamline-freehand-color:security-shield-network",
	});
}

export default Component;
