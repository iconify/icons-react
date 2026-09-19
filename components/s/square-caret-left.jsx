import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_3yviq6i.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_3yviq6i"/>`,
		"fallback": "fa6-solid:square-caret-left",
	});
}

export default Component;
