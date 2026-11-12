import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nme-lfb6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nme-lfb6e"/>`,
		"fallback": "selfhst:jsreport-light",
	});
}

export default Component;
