import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug54_cbfy.css';
import '../../css/w/wfiymubcg.css';
import '../../css/q/q5gb5d1vl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug54_cbfy"/><path class="wfiymubcg"/><path class="q5gb5d1vl"/>`,
		"fallback": "energy-icons:rugby-20-bold",
	});
}

export default Component;
