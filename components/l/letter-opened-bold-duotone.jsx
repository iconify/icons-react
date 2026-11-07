import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-k_gnknn.css';
import '../../css/h/hvs5gsb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x-k_gnknn"/><path class="hvs5gsb1n"/>`,
		"fallback": "solar:letter-opened-bold-duotone",
	});
}

export default Component;
