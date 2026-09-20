import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdnaq3xwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pdnaq3xwe"/>`,
		"fallback": "streamline-freehand:programming-hold-code",
	});
}

export default Component;
