import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr5k4eg8t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr5k4eg8t"/>`,
		"fallback": "famicons:scan",
	});
}

export default Component;
