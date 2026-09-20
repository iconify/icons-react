import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqjoz67jv.css';
import '../../css/g/gwcmzd5cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqjoz67jv"/><path clip-rule="evenodd" class="gwcmzd5cl"/>`,
		"fallback": "lineicons:spotify-alt",
	});
}

export default Component;
