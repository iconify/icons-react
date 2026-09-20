import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0c_hvufd.css';
import '../../css/h/h3q-mcb9s.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0c_hvufd"/><path class="h3q-mcb9s"/>`,
		"fallback": "lineicons:save",
	});
}

export default Component;
