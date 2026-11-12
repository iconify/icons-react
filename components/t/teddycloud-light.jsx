import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd8d_bcwh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd8d_bcwh"/>`,
		"fallback": "selfhst:teddycloud-light",
	});
}

export default Component;
