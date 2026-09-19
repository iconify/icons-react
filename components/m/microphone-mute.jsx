import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru4yxcipc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru4yxcipc"/>`,
		"fallback": "at-icons:microphone-mute",
	});
}

export default Component;
