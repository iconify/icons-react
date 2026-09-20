import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eu494bbjh.css';
import '../../css/x/xe5u1ikbh.css';
import '../../css/a/am8p66beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eu494bbjh"/><path class="xe5u1ikbh"/><path class="am8p66beq"/></g>`,
		"fallback": "streamline-cyber-color:share",
	});
}

export default Component;
