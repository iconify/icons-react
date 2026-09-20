import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfv5vpb8d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfv5vpb8d"/>`,
		"fallback": "selfhst:netgear-light",
	});
}

export default Component;
