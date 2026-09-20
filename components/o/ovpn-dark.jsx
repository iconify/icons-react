import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whew0bbsh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whew0bbsh"/>`,
		"fallback": "selfhst:ovpn-dark",
	});
}

export default Component;
