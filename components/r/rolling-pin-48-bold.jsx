import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6y4q0buk.css';
import '../../css/y/ykgt55trn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6y4q0buk"/><path class="ykgt55trn"/>`,
		"fallback": "energy-icons:rolling-pin-48-bold",
	});
}

export default Component;
