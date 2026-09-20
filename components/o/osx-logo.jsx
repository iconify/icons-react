import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-9mn0bds.css';
import '../../css/y/y0zppssaw.css';
import '../../css/q/qx7t-wzhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-9mn0bds"/><path class="y0zppssaw"/><path class="qx7t-wzhq"/></g>`,
		"fallback": "streamline-ultimate-color:osx-logo",
	});
}

export default Component;
