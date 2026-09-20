import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6ltp7bii.css';
import '../../css/j/jug1albzi.css';
import '../../css/y/yo1mv0bwb.css';
import '../../css/l/lyaobbb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w6ltp7bii"/><path class="jug1albzi"/><path class="yo1mv0bwb"/><path class="lyaobbb2n"/></g>`,
		"fallback": "streamline-ultimate-color:tag-dollar",
	});
}

export default Component;
