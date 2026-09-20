import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swdmcm1ir.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="swdmcm1ir"/>`,
		"fallback": "ix:tag-arrow-left-filled",
	});
}

export default Component;
