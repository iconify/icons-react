import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nybo-p7sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nybo-p7sn"/>`,
		"fallback": "hugeicons:orientation-landscape-to-potrait",
	});
}

export default Component;
