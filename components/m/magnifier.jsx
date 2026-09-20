import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zimqkib2m.css';
import '../../css/y/y1jfbyb0b.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zimqkib2m"/><path class="y1jfbyb0b"/>`,
		"fallback": "lineicons:magnifier",
	});
}

export default Component;
