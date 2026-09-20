import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgclsml9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hgclsml9l"/>`,
		"fallback": "solar:square-arrow-down-bold",
	});
}

export default Component;
