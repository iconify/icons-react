import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9woi6bez.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9woi6bez"/>`,
		"fallback": "selfhst:rallly-dark",
	});
}

export default Component;
