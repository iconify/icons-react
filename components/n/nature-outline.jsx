import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez0wvl5yk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez0wvl5yk"/>`,
		"fallback": "mdi:nature-outline",
	});
}

export default Component;
