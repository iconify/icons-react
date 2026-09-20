import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6mp3b79a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6mp3b79a"/>`,
		"fallback": "reicon:user-search3",
	});
}

export default Component;
