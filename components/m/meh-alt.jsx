import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru5z-ccmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru5z-ccmf"/>`,
		"fallback": "bxs:meh-alt",
	});
}

export default Component;
