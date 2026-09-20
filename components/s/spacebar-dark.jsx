import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix0d87bse.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix0d87bse"/>`,
		"fallback": "selfhst:spacebar-dark",
	});
}

export default Component;
