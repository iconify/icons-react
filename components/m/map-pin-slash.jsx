import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emhm-p6za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emhm-p6za"/>`,
		"fallback": "sidekickicons:map-pin-slash",
	});
}

export default Component;
