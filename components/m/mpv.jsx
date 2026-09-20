import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqryr30dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqryr30dg"/>`,
		"fallback": "thesvg:mpv",
	});
}

export default Component;
