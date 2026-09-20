import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv_-1uxed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv_-1uxed"/>`,
		"fallback": "selfhst:laudspeaker-light",
	});
}

export default Component;
