import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2b-wyb_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2b-wyb_w"/>`,
		"fallback": "selfhst:plex-dash-dark",
	});
}

export default Component;
