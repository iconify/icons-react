import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgj84yb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgj84yb6b"/>`,
		"fallback": "noviair:log-out",
	});
}

export default Component;
