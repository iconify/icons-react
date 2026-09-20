import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtt3ujtqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtt3ujtqd"/>`,
		"fallback": "keyline-icons:sticky-note-off",
	});
}

export default Component;
