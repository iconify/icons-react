import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_9bwc3ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b_9bwc3ik"/>`,
		"fallback": "solar:record-audio-circle-outline",
	});
}

export default Component;
