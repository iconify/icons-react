import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjgyyc_du.css';
import '../../css/q/qku2ab65j.css';
import '../../css/p/pjsp1fb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wjgyyc_du"/><path class="qku2ab65j"/><path class="pjsp1fb8q"/></g>`,
		"fallback": "streamline-cyber-color:sun-set-2",
	});
}

export default Component;
