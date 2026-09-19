import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m531q4efy.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m531q4efy"/>`,
		"fallback": "fa-solid:meh",
	});
}

export default Component;
