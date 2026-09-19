import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcs10w16x.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcs10w16x"/>`,
		"fallback": "fa-solid:peace",
	});
}

export default Component;
