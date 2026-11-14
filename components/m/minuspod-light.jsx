import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj3bhgb9b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj3bhgb9b"/>`,
		"fallback": "selfhst:minuspod-light",
	});
}

export default Component;
