import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_kk64s-x.css';
import '../../css/p/p_p4lxbry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_kk64s-x"/><path class="p_p4lxbry"/>`,
		"fallback": "selfhst:spotify-for-creators",
	});
}

export default Component;
