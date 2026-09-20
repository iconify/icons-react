import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdmk0nb5w.css';
import '../../css/l/loieh1tve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdmk0nb5w"/><path class="loieh1tve"/>`,
		"fallback": "streamline-ultimate:read-email-at-1-bold",
	});
}

export default Component;
