import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9nen1bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9nen1bug"/>`,
		"fallback": "streamline-sharp:user-add-plus",
	});
}

export default Component;
