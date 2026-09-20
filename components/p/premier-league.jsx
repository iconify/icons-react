import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shh_xvobj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shh_xvobj"/>`,
		"fallback": "thesvg-color:premier-league",
	});
}

export default Component;
