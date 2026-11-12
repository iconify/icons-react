import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8jf6yr1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8jf6yr1a"/>`,
		"fallback": "selfhst:microsoft-outlook-2018-light",
	});
}

export default Component;
