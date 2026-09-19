import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrk853yos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrk853yos"/>`,
		"fallback": "eva:percent-outline",
	});
}

export default Component;
