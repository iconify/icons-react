import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk0bp2b6e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk0bp2b6e"/>`,
		"fallback": "pinhead:iowa-with-capital-star",
	});
}

export default Component;
