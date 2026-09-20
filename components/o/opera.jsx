import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp4cgdcmh.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp4cgdcmh"/>`,
		"fallback": "lineicons:opera",
	});
}

export default Component;
