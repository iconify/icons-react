import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbde64sxk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbde64sxk"/>`,
		"fallback": "selfhst:munin-dark",
	});
}

export default Component;
