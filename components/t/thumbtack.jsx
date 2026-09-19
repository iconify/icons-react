import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0tnvacgt.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0tnvacgt"/>`,
		"fallback": "fa-solid:thumbtack",
	});
}

export default Component;
