import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8y4tcbiy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8y4tcbiy"/>`,
		"fallback": "nonicons:java-16",
	});
}

export default Component;
