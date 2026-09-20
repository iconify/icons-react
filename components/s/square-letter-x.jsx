import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvih1op7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvih1op7o"/>`,
		"fallback": "tabler:square-letter-x",
	});
}

export default Component;
