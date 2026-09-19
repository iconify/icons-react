import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu46teicf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu46teicf"/>`,
		"fallback": "fluent-mdl2:system",
	});
}

export default Component;
