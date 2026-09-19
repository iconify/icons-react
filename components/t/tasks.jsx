import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8jfljbrz.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8jfljbrz"/>`,
		"fallback": "fa:tasks",
	});
}

export default Component;
