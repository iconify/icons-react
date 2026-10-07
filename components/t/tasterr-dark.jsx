import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbeo8hb_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbeo8hb_n"/>`,
		"fallback": "selfhst:tasterr-dark",
	});
}

export default Component;
