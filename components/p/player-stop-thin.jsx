import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgrk4xwyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="bgrk4xwyk"/>`,
		"fallback": "iconamoon:player-stop-thin",
	});
}

export default Component;
