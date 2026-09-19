import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5kweu8nd.css';
import '../../css/y/yj9yfrb2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5kweu8nd"/><path class="yj9yfrb2m"/>`,
		"fallback": "fxemoji:screen",
	});
}

export default Component;
