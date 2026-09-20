import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezox_nb2h.css';
import '../../css/s/sigw4fbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezox_nb2h"/><path class="sigw4fbqn"/>`,
		"fallback": "lineicons:slideshare",
	});
}

export default Component;
