import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-6yrobrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-6yrobrn"/>`,
		"fallback": "simple-icons:traxsource",
	});
}

export default Component;
