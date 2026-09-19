import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv-xs0bgz.css';
import '../../css/h/h8m5eji-v.css';
import '../../css/g/g5ov6kbwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv-xs0bgz"/><path class="h8m5eji-v"/><path class="g5ov6kbwr"/>`,
		"fallback": "fxemoji:leaffluttering",
	});
}

export default Component;
