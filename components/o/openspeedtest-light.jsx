import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6b9k4bpd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6b9k4bpd"/>`,
		"fallback": "selfhst:openspeedtest-light",
	});
}

export default Component;
