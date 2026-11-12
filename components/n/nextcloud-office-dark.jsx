import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc6fdccls.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc6fdccls"/>`,
		"fallback": "selfhst:nextcloud-office-dark",
	});
}

export default Component;
