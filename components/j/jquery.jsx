import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oec0mgsqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oec0mgsqm"/>`,
		"fallback": "mdi:jquery",
	});
}

export default Component;
