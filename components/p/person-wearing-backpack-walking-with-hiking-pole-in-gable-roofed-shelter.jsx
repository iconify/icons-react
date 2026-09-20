import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez8rbaciu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez8rbaciu"/>`,
		"fallback": "pinhead:person-wearing-backpack-walking-with-hiking-pole-in-gable-roofed-shelter",
	});
}

export default Component;
