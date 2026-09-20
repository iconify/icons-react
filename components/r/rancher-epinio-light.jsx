import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lta_4qb-q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lta_4qb-q"/>`,
		"fallback": "selfhst:rancher-epinio-light",
	});
}

export default Component;
