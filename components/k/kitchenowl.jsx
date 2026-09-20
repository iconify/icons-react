import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf24crklk.css';
import '../../css/y/yr2jp-bye.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf24crklk"/><path class="yr2jp-bye"/>`,
		"fallback": "selfhst:kitchenowl",
	});
}

export default Component;
