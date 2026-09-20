import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9ml2l_nc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9ml2l_nc"/>`,
		"fallback": "thesvg-color:nhl",
	});
}

export default Component;
