import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtc4_gbjh.css';
import '../../css/y/y4wwydbht.css';
import '../../css/y/yctemwfli.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtc4_gbjh"/><path class="y4wwydbht"/><path class="yctemwfli"/>`,
		"fallback": "energy-icons:solar-tile-20",
	});
}

export default Component;
