import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni98h0b5w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni98h0b5w"/>`,
		"fallback": "carbon:volume-mute-filled",
	});
}

export default Component;
