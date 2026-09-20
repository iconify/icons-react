import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhjziobee.css';
import '../../css/q/q7z1euqgp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhjziobee"/><path class="q7z1euqgp"/>`,
		"fallback": "vaadin:male",
	});
}

export default Component;
