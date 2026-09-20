import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0gifg4or.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0gifg4or"/>`,
		"fallback": "reicon:video-frame2-filled",
	});
}

export default Component;
