import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft81xcc4x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft81xcc4x"/>`,
		"fallback": "vaadin:road",
	});
}

export default Component;
