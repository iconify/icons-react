import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv9xr--ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv9xr--ag"/>`,
		"fallback": "thesvg-color:mikrotik",
	});
}

export default Component;
