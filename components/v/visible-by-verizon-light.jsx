import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq7kpbc_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq7kpbc_h"/>`,
		"fallback": "selfhst:visible-by-verizon-light",
	});
}

export default Component;
