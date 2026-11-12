import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iii3nbb6b.css';
import '../../css/s/sdij9c2vr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iii3nbb6b"/><path class="sdij9c2vr"/>`,
		"fallback": "selfhst:sharkord-light",
	});
}

export default Component;
