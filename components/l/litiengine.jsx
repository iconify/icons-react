import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2_wh8b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2_wh8b2y"/>`,
		"fallback": "thesvg-color:litiengine",
	});
}

export default Component;
