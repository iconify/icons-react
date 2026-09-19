import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx-l_4b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx-l_4b3o"/>`,
		"fallback": "fe:magic",
	});
}

export default Component;
