import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ninrxlcbc.css';
import '../../css/w/wg1goqjvd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ninrxlcbc"/><path class="wg1goqjvd"/>`,
		"fallback": "selfhst:uncloud",
	});
}

export default Component;
