import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9wxzgb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9wxzgb-i"/>`,
		"fallback": "noviair:smartphone-refresh",
	});
}

export default Component;
