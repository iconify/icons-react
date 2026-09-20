import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mt16x-byl.css';
import '../../css/f/fburqup6o.css';
import '../../css/y/y8kks257e.css';
import '../../css/a/a0h7dlbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mt16x-byl"/><path class="fburqup6o"/><path class="y8kks257e"/><path class="a0h7dlbic"/></g>`,
		"fallback": "streamline-cyber-color:shopping-bag-frown",
	});
}

export default Component;
