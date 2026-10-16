import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgjp5_b_u.css';
import '../../css/t/tznh2vbzh.css';
import '../../css/m/m7fctby7n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgjp5_b_u"/><path class="tznh2vbzh"/><path class="m7fctby7n"/>`,
		"fallback": "energy-icons:marker-hydrogen-20",
	});
}

export default Component;
