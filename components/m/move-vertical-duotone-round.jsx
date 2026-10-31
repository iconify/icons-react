import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clb7lobia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clb7lobia"/>`,
		"fallback": "coolicons:move-vertical-duotone-round",
	});
}

export default Component;
