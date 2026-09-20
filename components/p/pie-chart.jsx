import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5mqw_b-g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5mqw_b-g"/>`,
		"fallback": "radix-icons:pie-chart",
	});
}

export default Component;
