import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxmyj_bxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxmyj_bxa"/>`,
		"fallback": "thesvg:virgin-atlantic",
	});
}

export default Component;
