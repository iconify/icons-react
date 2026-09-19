import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7srt_bha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7srt_bha"/>`,
		"fallback": "game-icons:think",
	});
}

export default Component;
