import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdtnx_bba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdtnx_bba"/>`,
		"fallback": "selfhst:powerschool-light",
	});
}

export default Component;
