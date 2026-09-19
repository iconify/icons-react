import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0fd6ob0w.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0fd6ob0w"/>`,
		"fallback": "academicons:stackoverflow",
	});
}

export default Component;
