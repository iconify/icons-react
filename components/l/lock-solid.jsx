import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcqgxhbay.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wcqgxhbay"/>`,
		"fallback": "teenyicons:lock-solid",
	});
}

export default Component;
