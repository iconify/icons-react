import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx259dcfs.css';
import '../../css/v/vyud_uuqs.css';
import '../../css/n/nrze7ue5l.css';
import '../../css/h/hh5iymbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vx259dcfs"/><path class="vyud_uuqs"/><path class="nrze7ue5l"/><path class="hh5iymbpq"/></g>`,
		"fallback": "streamline-cyber-color:server",
	});
}

export default Component;
