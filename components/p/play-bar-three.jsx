import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q19_zcben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q19_zcben"/>`,
		"fallback": "cbi:play-bar-three",
	});
}

export default Component;
