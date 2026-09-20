import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qivw3q8uz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qivw3q8uz"/>`,
		"fallback": "roentgen:power-tower-flag",
	});
}

export default Component;
