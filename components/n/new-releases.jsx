import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb_gupbgs.css';
import '../../css/i/iquxmufry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb_gupbgs"/><path class="iquxmufry"/>`,
		"fallback": "selfhst:new-releases",
	});
}

export default Component;
