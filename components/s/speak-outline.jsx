import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndlt7bcrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndlt7bcrl"/>`,
		"fallback": "mdi:speak-outline",
	});
}

export default Component;
