import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygh_3sbqp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygh_3sbqp"/>`,
		"fallback": "garden:translation-outdated-fill-16",
	});
}

export default Component;
