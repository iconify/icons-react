import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phbi82u5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phbi82u5j"/>`,
		"fallback": "solar:stop-linear",
	});
}

export default Component;
