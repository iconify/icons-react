import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz6i_lbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz6i_lbks"/>`,
		"fallback": "thesvg-color:similarweb",
	});
}

export default Component;
