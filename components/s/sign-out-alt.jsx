import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eec93pb3i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eec93pb3i"/>`,
		"fallback": "vaadin:sign-out-alt",
	});
}

export default Component;
