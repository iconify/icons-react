import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgkmlpr8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgkmlpr8x"/>`,
		"fallback": "mdi:monitor-share",
	});
}

export default Component;
