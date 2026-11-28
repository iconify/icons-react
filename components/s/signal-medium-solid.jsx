import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpt0x2bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpt0x2bxr"/>`,
		"fallback": "iconaut:signal-medium-solid",
	});
}

export default Component;
