import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdwgb8ufi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdwgb8ufi"/>`,
		"fallback": "withicons:pill-solid",
	});
}

export default Component;
