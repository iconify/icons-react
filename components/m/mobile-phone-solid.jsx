import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnm4t1t0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gnm4t1t0n"/>`,
		"fallback": "basil:mobile-phone-solid",
	});
}

export default Component;
