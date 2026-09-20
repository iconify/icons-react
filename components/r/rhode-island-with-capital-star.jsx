import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/salf2bcen.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="salf2bcen"/>`,
		"fallback": "pinhead:rhode-island-with-capital-star",
	});
}

export default Component;
