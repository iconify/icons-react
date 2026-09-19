import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usoukvb3k.css';

const viewBox = {"width":408,"height":392};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usoukvb3k"/>`,
		"fallback": "zmdi:local-dining",
	});
}

export default Component;
