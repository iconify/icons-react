import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ualv6vazw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ualv6vazw"/>`,
		"fallback": "uil:location-pin-alt",
	});
}

export default Component;
