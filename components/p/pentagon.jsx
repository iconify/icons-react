import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azi51ub6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azi51ub6y"/>`,
		"fallback": "lucide:pentagon",
	});
}

export default Component;
