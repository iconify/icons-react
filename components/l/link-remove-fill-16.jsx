import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc8fo5bjp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc8fo5bjp"/>`,
		"fallback": "garden:link-remove-fill-16",
	});
}

export default Component;
