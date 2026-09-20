import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s25dc911s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s25dc911s"/>`,
		"fallback": "mdi:right-to-left",
	});
}

export default Component;
