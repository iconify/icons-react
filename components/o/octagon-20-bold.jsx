import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcs_wdb-p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcs_wdb-p"/>`,
		"fallback": "energy-icons:octagon-20-bold",
	});
}

export default Component;
