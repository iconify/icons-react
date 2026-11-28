import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi51t6b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi51t6b3j"/>`,
		"fallback": "noviair:shield-half-check",
	});
}

export default Component;
