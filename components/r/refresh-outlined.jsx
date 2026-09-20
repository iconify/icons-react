import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb5dwob2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb5dwob2u"/>`,
		"fallback": "weui:refresh-outlined",
	});
}

export default Component;
