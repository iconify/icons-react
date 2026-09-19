import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3n3nzbqe.css';
import '../../css/i/iv66tstfm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3n3nzbqe"/><path class="iv66tstfm"/>`,
		"fallback": "carbon:phone-ip",
	});
}

export default Component;
