import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lns7h3qht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lns7h3qht"/>`,
		"fallback": "solar:shield-minimalistic-outline",
	});
}

export default Component;
