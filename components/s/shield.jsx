import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eccpoibnz.css';

const viewBox = {"width":27,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eccpoibnz"/>`,
		"fallback": "et:shield",
	});
}

export default Component;
