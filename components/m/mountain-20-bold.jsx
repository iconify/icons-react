import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrn2qju6o.css';
import '../../css/b/bgn-z-bhy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrn2qju6o"/><path class="bgn-z-bhy"/>`,
		"fallback": "energy-icons:mountain-20-bold",
	});
}

export default Component;
