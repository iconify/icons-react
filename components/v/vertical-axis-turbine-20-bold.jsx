import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejhk40bjj.css';
import '../../css/f/fg50i1ydo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejhk40bjj"/><path class="fg50i1ydo"/>`,
		"fallback": "energy-icons:vertical-axis-turbine-20-bold",
	});
}

export default Component;
