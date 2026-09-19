import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6d5uggdo.css';
import '../../css/c/cuzgrrbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6d5uggdo"/><path class="cuzgrrbpn"/>`,
		"fallback": "bxs:phone-call",
	});
}

export default Component;
