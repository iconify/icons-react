import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn_65vfzn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn_65vfzn"/>`,
		"fallback": "streamline-flex:stairs-1",
	});
}

export default Component;
