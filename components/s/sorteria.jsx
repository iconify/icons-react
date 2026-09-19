import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cck8boubl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cck8boubl"/>`,
		"fallback": "cbi:sorteria",
	});
}

export default Component;
