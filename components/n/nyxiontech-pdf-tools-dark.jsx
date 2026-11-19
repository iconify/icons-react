import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3m0nhb-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3m0nhb-x"/>`,
		"fallback": "selfhst:nyxiontech-pdf-tools-dark",
	});
}

export default Component;
