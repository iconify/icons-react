import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6edjb7-p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6edjb7-p"/>`,
		"fallback": "teenyicons:tick-small-solid",
	});
}

export default Component;
