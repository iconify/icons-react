import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei8g-eb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei8g-eb6c"/>`,
		"fallback": "thesvg-color:open-access",
	});
}

export default Component;
