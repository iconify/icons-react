import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivimh0l5c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivimh0l5c"/>`,
		"fallback": "selfhst:motioneye-light",
	});
}

export default Component;
