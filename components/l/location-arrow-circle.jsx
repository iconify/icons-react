import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7ic7cc0s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7ic7cc0s"/>`,
		"fallback": "vaadin:location-arrow-circle",
	});
}

export default Component;
