import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2gdm3bzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2gdm3bzz"/>`,
		"fallback": "boxicons:solar-panel",
	});
}

export default Component;
