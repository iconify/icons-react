import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkwkh496s.css';
import '../../css/u/u8-785b1v.css';
import '../../css/b/bni3nanaj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkwkh496s"/><path class="u8-785b1v"/><path class="bni3nanaj"/>`,
		"fallback": "selfhst:pulp-project",
	});
}

export default Component;
