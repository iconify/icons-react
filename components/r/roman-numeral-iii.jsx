import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7uz5csis.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7uz5csis"/>`,
		"fallback": "pinhead:roman-numeral-iii",
	});
}

export default Component;
