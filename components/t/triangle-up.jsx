import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6t7b7boq.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6t7b7boq"/>`,
		"fallback": "octicon:triangle-up",
	});
}

export default Component;
