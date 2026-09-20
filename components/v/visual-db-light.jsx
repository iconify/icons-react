import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouf82zblf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouf82zblf"/>`,
		"fallback": "selfhst:visual-db-light",
	});
}

export default Component;
