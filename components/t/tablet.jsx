import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cur5z4b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cur5z4b9y"/>`,
		"fallback": "vadivam:tablet",
	});
}

export default Component;
