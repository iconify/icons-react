import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_lwbwbqm.css';
import '../../css/y/yjop_6tvw.css';
import '../../css/m/mpyvfyfzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_lwbwbqm"/><path class="yjop_6tvw"/><path class="mpyvfyfzq"/>`,
		"fallback": "streamline-ultimate:walkman-headphones-bold",
	});
}

export default Component;
