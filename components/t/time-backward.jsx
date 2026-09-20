import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu5aiccfe.css';
import '../../css/r/r0zr1abhx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu5aiccfe"/><path class="r0zr1abhx"/>`,
		"fallback": "vaadin:time-backward",
	});
}

export default Component;
