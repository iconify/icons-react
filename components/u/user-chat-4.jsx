import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngjd1tbqn.css';
import '../../css/m/my3l08mbp.css';
import '../../css/a/afpi-0bwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ngjd1tbqn"/><path class="my3l08mbp"/><path class="afpi-0bwj"/></g>`,
		"fallback": "streamline-cyber-color:user-chat-4",
	});
}

export default Component;
