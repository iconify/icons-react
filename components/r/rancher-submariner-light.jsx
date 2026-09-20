import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug8ynby4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug8ynby4i"/>`,
		"fallback": "selfhst:rancher-submariner-light",
	});
}

export default Component;
