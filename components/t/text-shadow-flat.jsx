import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/plcbtnb0u.css';
import '../../css/n/nvm8aibyq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="plcbtnb0u"/><path class="nvm8aibyq"/></g>`,
		"fallback": "streamline-plump-color:text-shadow-flat",
	});
}

export default Component;
