import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7yn-bb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="r7yn-bb8l"/>`,
		"fallback": "iconamoon:player-stop-bold",
	});
}

export default Component;
