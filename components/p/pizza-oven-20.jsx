import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6xwa879m.css';
import '../../css/i/i1hgre67m.css';
import '../../css/s/srewe004d.css';
import '../../css/j/jrsb6f_rb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6xwa879m"/><path class="i1hgre67m"/><path class="srewe004d"/><path class="jrsb6f_rb"/>`,
		"fallback": "energy-icons:pizza-oven-20",
	});
}

export default Component;
