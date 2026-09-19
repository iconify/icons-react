import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewydz64iz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewydz64iz"/>`,
		"fallback": "codicon:lightbulb-compact",
	});
}

export default Component;
