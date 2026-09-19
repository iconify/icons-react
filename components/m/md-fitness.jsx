import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we_skjcpa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we_skjcpa"/>`,
		"fallback": "ion:md-fitness",
	});
}

export default Component;
