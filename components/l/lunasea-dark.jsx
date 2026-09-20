import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5bb0i2_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5bb0i2_s"/>`,
		"fallback": "selfhst:lunasea-dark",
	});
}

export default Component;
