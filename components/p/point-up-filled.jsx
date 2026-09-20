import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxmoo7dca.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxmoo7dca"/>`,
		"fallback": "ix:point-up-filled",
	});
}

export default Component;
