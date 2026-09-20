import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctf2s_bgf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctf2s_bgf"/>`,
		"fallback": "oui:video-player",
	});
}

export default Component;
