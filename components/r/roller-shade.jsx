import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og4e6_85k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og4e6_85k"/>`,
		"fallback": "mdi:roller-shade",
	});
}

export default Component;
