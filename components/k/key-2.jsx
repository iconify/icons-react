import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flojtzjpe.css';
import '../../css/q/qg6t_9u2t.css';
import '../../css/p/pjtqjjb0u.css';
import '../../css/u/uj2whhbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="flojtzjpe"/><path class="qg6t_9u2t"/><path class="pjtqjjb0u"/><path class="uj2whhbmi"/></g>`,
		"fallback": "streamline-cyber-color:key-2",
	});
}

export default Component;
