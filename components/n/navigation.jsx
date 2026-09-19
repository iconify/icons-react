import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de78-xbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de78-xbzo"/>`,
		"fallback": "griddy-icons:navigation",
	});
}

export default Component;
