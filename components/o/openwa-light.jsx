import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tted54b7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tted54b7c"/>`,
		"fallback": "selfhst:openwa-light",
	});
}

export default Component;
