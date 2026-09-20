import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8-l1pb_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8-l1pb_n"/>`,
		"fallback": "selfhst:jellyfin-dark",
	});
}

export default Component;
