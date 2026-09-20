import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcb_4fb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcb_4fb8m"/>`,
		"fallback": "pixel:newsbreak",
	});
}

export default Component;
