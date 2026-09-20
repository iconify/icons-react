import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfmbv0bgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfmbv0bgy"/>`,
		"fallback": "keyline-icons:list-x-sharp-fill",
	});
}

export default Component;
