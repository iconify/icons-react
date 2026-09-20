import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/leyf1obja.css';
import '../../css/h/h5ockobrw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="leyf1obja"/><path class="h5ockobrw"/></g>`,
		"fallback": "streamline-flex-color:pathfinder-minus-front-2",
	});
}

export default Component;
