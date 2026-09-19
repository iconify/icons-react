import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqap_137d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqap_137d"/>`,
		"fallback": "hugeicons:vk",
	});
}

export default Component;
