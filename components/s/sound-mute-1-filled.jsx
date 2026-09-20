import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvyojlb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvyojlb_h"/>`,
		"fallback": "tdesign:sound-mute-1-filled",
	});
}

export default Component;
