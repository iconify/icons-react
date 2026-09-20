import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn5syhb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn5syhb1o"/>`,
		"fallback": "mdi:play",
	});
}

export default Component;
