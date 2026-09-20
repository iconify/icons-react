import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2yej0b7l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2yej0b7l"/>`,
		"fallback": "pinhead:north-carolina-with-capital-star",
	});
}

export default Component;
