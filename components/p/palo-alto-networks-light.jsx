import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtvo8ubai.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtvo8ubai"/>`,
		"fallback": "selfhst:palo-alto-networks-light",
	});
}

export default Component;
