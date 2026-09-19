import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2o51bbex.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2o51bbex"/>`,
		"fallback": "fa-solid:sd-card",
	});
}

export default Component;
