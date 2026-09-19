import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tujo4e5-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tujo4e5-t"/>`,
		"fallback": "bxs:plane",
	});
}

export default Component;
