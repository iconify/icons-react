import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri-3uvbfe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri-3uvbfe"/>`,
		"fallback": "pinhead:parking-stall-markings-with-wide-e",
	});
}

export default Component;
