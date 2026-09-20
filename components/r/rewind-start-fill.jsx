import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i44hfh31h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i44hfh31h"/>`,
		"fallback": "ri:rewind-start-fill",
	});
}

export default Component;
