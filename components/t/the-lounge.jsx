import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o84xpx01m.css';
import '../../css/u/ugibgdcyc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o84xpx01m"/><path class="ugibgdcyc"/>`,
		"fallback": "selfhst:the-lounge",
	});
}

export default Component;
