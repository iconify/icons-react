import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu5xhwzcj.css';
import '../../css/y/ywttjwgha.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu5xhwzcj"/><path class="ywttjwgha"/>`,
		"fallback": "garden:screen-arrow-up-fill-20",
	});
}

export default Component;
