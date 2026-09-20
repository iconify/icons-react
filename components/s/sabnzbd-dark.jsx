import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc182sbbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc182sbbl"/>`,
		"fallback": "selfhst:sabnzbd-dark",
	});
}

export default Component;
