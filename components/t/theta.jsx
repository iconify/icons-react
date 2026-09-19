import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtu6puqov.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtu6puqov"/>`,
		"fallback": "fa-solid:theta",
	});
}

export default Component;
