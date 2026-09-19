import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd9adw1-a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd9adw1-a"/>`,
		"fallback": "game-icons:viking-longhouse",
	});
}

export default Component;
