import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwn4t2-5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwn4t2-5y"/>`,
		"fallback": "token:vent",
	});
}

export default Component;
