import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd-sd1bst.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd-sd1bst"/>`,
		"fallback": "maki:rail-metro-11",
	});
}

export default Component;
