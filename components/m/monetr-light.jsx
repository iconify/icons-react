import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oycn88bfo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oycn88bfo"/>`,
		"fallback": "selfhst:monetr-light",
	});
}

export default Component;
