import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyt0lf95d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyt0lf95d"/>`,
		"fallback": "reicon:volleyball-filled",
	});
}

export default Component;
