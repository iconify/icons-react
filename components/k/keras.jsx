import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bknck_d4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bknck_d4i"/>`,
		"fallback": "thesvg-color:keras",
	});
}

export default Component;
