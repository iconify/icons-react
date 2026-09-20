import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u264_sb5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u264_sb5u"/>`,
		"fallback": "selfhst:resilio-sync-light",
	});
}

export default Component;
