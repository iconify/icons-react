import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pju9q-5bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pju9q-5bg"/>`,
		"fallback": "bxs:upside-down",
	});
}

export default Component;
