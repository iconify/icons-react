import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p67p4-ffp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p67p4-ffp"/>`,
		"fallback": "selfhst:netalertx-dark",
	});
}

export default Component;
