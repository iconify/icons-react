import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aow7gkdrp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aow7gkdrp"/>`,
		"fallback": "ix:video-camera-record-filled",
	});
}

export default Component;
