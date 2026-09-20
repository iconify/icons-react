import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdp5qyblk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdp5qyblk"/>`,
		"fallback": "selfhst:proton-dark",
	});
}

export default Component;
