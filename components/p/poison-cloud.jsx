import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2av_51yi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2av_51yi"/>`,
		"fallback": "game-icons:poison-cloud",
	});
}

export default Component;
