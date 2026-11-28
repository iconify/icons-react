import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zflwx6kpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zflwx6kpo"/>`,
		"fallback": "noviair:mask",
	});
}

export default Component;
