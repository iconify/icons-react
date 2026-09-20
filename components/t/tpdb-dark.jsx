import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq_ifjq_u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq_ifjq_u"/>`,
		"fallback": "selfhst:tpdb-dark",
	});
}

export default Component;
