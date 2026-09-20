import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvx6p_tap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvx6p_tap"/>`,
		"fallback": "thesvg-color:toyota",
	});
}

export default Component;
