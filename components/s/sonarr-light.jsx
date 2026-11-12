import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi-7frb_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi-7frb_x"/>`,
		"fallback": "selfhst:sonarr-light",
	});
}

export default Component;
