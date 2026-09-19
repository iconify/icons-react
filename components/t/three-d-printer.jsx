import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k44ryia2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k44ryia2k"/>`,
		"fallback": "hugeicons:three-d-printer",
	});
}

export default Component;
