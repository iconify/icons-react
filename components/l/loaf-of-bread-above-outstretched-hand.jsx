import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk21khipp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk21khipp"/>`,
		"fallback": "pinhead:loaf-of-bread-above-outstretched-hand",
	});
}

export default Component;
