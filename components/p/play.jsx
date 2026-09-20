import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m39f0nb9f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m39f0nb9f"/>`,
		"fallback": "vaadin:play",
	});
}

export default Component;
