import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ped2ifbwy.css';
import '../../css/h/h-zat1q1q.css';
import '../../css/j/jfwb-ipvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ped2ifbwy"/><rect class="h-zat1q1q"/><rect class="jfwb-ipvu"/>`,
		"fallback": "bxs:objects-vertical-bottom",
	});
}

export default Component;
