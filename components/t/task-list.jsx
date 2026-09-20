import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kiz9jrc3p.css';
import '../../css/q/q53s9dbiz.css';
import '../../css/t/te7wl3bbd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kiz9jrc3p"/><path class="q53s9dbiz"/><path class="te7wl3bbd"/></g>`,
		"fallback": "streamline-color:task-list",
	});
}

export default Component;
