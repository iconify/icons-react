import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo5l4obau.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo5l4obau"/>`,
		"fallback": "nonicons:swift-16",
	});
}

export default Component;
