import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3r18vqzo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3r18vqzo"/>`,
		"fallback": "icon-park-solid:necktie",
	});
}

export default Component;
