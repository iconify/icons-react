import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjad2w0vk.css';
import '../../css/t/t4hbdgm2e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fjad2w0vk"/><path class="t4hbdgm2e"/></g>`,
		"fallback": "streamline-color:minimize-window-2",
	});
}

export default Component;
