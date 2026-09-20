import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq8bs9b3m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq8bs9b3m"/>`,
		"fallback": "selfhst:scrobblex-light",
	});
}

export default Component;
