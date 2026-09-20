import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t99fn8lrk.css';
import '../../css/c/cna8fmbzc.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t99fn8lrk"/><path class="cna8fmbzc"/>`,
		"fallback": "lineicons:teabag",
	});
}

export default Component;
