import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndoigqbyg.css';
import '../../css/f/fjsmmybyw.css';
import '../../css/q/q6vee1b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ndoigqbyg"/><path class="fjsmmybyw"/><path class="q6vee1b6e"/></g>`,
		"fallback": "streamline-cyber-color:spaghetti-fork",
	});
}

export default Component;
