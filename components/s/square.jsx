import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2vikvb4i.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2vikvb4i"/>`,
		"fallback": "fa:square",
	});
}

export default Component;
