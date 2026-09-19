import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyu31ob2a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyu31ob2a"/>`,
		"fallback": "game-icons:turd",
	});
}

export default Component;
