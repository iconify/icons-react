import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u30jk17_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u30jk17_y"/>`,
		"fallback": "ri:volume-mute-line",
	});
}

export default Component;
