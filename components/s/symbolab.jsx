import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciq-yttsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciq-yttsq"/>`,
		"fallback": "thesvg-color:symbolab",
	});
}

export default Component;
