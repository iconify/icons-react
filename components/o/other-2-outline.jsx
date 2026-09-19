import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm4bagw4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm4bagw4n"/>`,
		"fallback": "basil:other-2-outline",
	});
}

export default Component;
