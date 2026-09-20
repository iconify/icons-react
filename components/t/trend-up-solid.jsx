import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh1ztlbds.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vh1ztlbds"/>`,
		"fallback": "teenyicons:trend-up-solid",
	});
}

export default Component;
