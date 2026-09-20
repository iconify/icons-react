import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd44gwpip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd44gwpip"/>`,
		"fallback": "tabler:line-dashed",
	});
}

export default Component;
