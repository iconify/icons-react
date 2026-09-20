import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fx62bge0l.css';
import '../../css/q/q0gn3duch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fx62bge0l"/><path class="q0gn3duch"/></g>`,
		"fallback": "streamline-ultimate:monetization-bill-magnet",
	});
}

export default Component;
