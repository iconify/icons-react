import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieb6cgzbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieb6cgzbr"/>`,
		"fallback": "si:swap-vert-duotone",
	});
}

export default Component;
