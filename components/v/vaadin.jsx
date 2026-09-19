import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1h6_sbwd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1h6_sbwd"/>`,
		"fallback": "fa7-brands:vaadin",
	});
}

export default Component;
