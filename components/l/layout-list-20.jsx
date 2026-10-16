import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs_50ab_n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs_50ab_n"/>`,
		"fallback": "energy-icons:layout-list-20",
	});
}

export default Component;
