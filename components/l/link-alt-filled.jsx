import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joiiavbdl.css';
import '../../css/z/zuv7dvbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joiiavbdl"/><path class="zuv7dvbxa"/>`,
		"fallback": "boxicons:link-alt-filled",
	});
}

export default Component;
