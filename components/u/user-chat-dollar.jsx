import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvvoesb4o.css';
import '../../css/g/gp3_eseew.css';
import '../../css/u/uh8_dnb8m.css';
import '../../css/m/mjg3zwbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvvoesb4o"/><path class="gp3_eseew"/><path class="uh8_dnb8m"/><path class="mjg3zwbtf"/></g>`,
		"fallback": "streamline-cyber-color:user-chat-dollar",
	});
}

export default Component;
