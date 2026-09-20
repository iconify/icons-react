import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu06ygb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu06ygb0o"/>`,
		"fallback": "reicon:moon3",
	});
}

export default Component;
