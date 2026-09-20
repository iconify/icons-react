import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhprks6bk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhprks6bk"/>`,
		"fallback": "selfhst:visio-meet-dark",
	});
}

export default Component;
