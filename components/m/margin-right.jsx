import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3glxibdz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3glxibdz"/>`,
		"fallback": "vaadin:margin-right",
	});
}

export default Component;
