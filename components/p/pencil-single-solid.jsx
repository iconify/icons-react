import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt__1hb8y.css';
import '../../css/n/n7nwc9ecu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt__1hb8y"/><path clip-rule="evenodd" class="n7nwc9ecu"/>`,
		"fallback": "stash:pencil-single-solid",
	});
}

export default Component;
