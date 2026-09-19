import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nta_beb7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nta_beb7u"/>`,
		"fallback": "fa6-regular:thumbs-up",
	});
}

export default Component;
