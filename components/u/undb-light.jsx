import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icx04h3_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icx04h3_s"/>`,
		"fallback": "selfhst:undb-light",
	});
}

export default Component;
