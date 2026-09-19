import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig2lrfkgh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig2lrfkgh"/>`,
		"fallback": "garden:translation-exists-stroke-12",
	});
}

export default Component;
