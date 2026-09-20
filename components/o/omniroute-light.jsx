import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr6idbcqn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr6idbcqn"/>`,
		"fallback": "selfhst:omniroute-light",
	});
}

export default Component;
