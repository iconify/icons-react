import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wes_5_bjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wes_5_bjj"/>`,
		"fallback": "selfhst:revolt-light",
	});
}

export default Component;
