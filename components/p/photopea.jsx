import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns8xnbbfr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns8xnbbfr"/>`,
		"fallback": "selfhst:photopea",
	});
}

export default Component;
