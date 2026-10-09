import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg6cl-bwp.css';
import '../../css/x/xollm1waj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg6cl-bwp"/><path class="xollm1waj"/>`,
		"fallback": "energy-icons:pliers-20",
	});
}

export default Component;
