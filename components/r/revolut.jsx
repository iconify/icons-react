import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip_8fmbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip_8fmbqw"/>`,
		"fallback": "thesvg-color:revolut",
	});
}

export default Component;
