import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aupt0tb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aupt0tb1d"/>`,
		"fallback": "mdi:paw-outline",
	});
}

export default Component;
