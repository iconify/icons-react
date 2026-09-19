import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azt6sbb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azt6sbb6p"/>`,
		"fallback": "heroicons:numbered-list",
	});
}

export default Component;
