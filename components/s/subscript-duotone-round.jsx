import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c19_p2b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c19_p2b6e"/>`,
		"fallback": "coolicons:subscript-duotone-round",
	});
}

export default Component;
