import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-s55l-ke.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-s55l-ke"/>`,
		"fallback": "lsicon:vertical-center-outline",
	});
}

export default Component;
