import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x734hcp_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x734hcp_v"/>`,
		"fallback": "selfhst:lemmy-dark",
	});
}

export default Component;
