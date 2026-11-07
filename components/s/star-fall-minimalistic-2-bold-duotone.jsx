import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqmz4sbco.css';
import '../../css/a/aaopfcb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqmz4sbco"/><path clip-rule="evenodd" class="aaopfcb-u"/>`,
		"fallback": "solar:star-fall-minimalistic-2-bold-duotone",
	});
}

export default Component;
