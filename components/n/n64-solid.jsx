import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3z0rjreb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c3z0rjreb"/>`,
		"fallback": "teenyicons:n64-solid",
	});
}

export default Component;
