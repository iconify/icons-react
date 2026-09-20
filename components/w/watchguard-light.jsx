import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unn_8xtas.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unn_8xtas"/>`,
		"fallback": "selfhst:watchguard-light",
	});
}

export default Component;
