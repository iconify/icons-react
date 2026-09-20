import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w03eki6yi.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w03eki6yi"/>`,
		"fallback": "lineicons:search-alt",
	});
}

export default Component;
