import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl7no-boh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl7no-boh"/>`,
		"fallback": "selfhst:jumpserver-dark",
	});
}

export default Component;
