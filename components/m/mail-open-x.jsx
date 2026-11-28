import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suo3iwr-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suo3iwr-x"/>`,
		"fallback": "noviair-light:mail-open-x",
	});
}

export default Component;
