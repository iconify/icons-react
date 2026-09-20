import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltygs2q5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltygs2q5c"/>`,
		"fallback": "ri:planet-line",
	});
}

export default Component;
