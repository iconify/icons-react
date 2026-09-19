import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahb2qab2b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahb2qab2b"/>`,
		"fallback": "at-icons:sliders",
	});
}

export default Component;
