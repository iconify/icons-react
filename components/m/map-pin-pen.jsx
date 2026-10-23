import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciph4tade.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciph4tade"/>`,
		"fallback": "vadivam:map-pin-pen",
	});
}

export default Component;
