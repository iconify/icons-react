import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv842m9yr.css';
import '../../css/u/um4pykb1b.css';
import '../../css/d/d8en99qry.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv842m9yr"/><path class="um4pykb1b"/><path class="d8en99qry"/>`,
		"fallback": "energy-icons:seabed-habitat-20-bold",
	});
}

export default Component;
