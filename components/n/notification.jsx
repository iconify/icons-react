import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs3nyobbp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs3nyobbp"/>`,
		"fallback": "icomoon-free:notification",
	});
}

export default Component;
