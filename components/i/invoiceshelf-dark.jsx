import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrehdqb2u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrehdqb2u"/>`,
		"fallback": "selfhst:invoiceshelf-dark",
	});
}

export default Component;
