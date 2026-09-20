import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3jy0q-gs.css';
import '../../css/w/w_-a5y10p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3jy0q-gs"/><path class="w_-a5y10p"/>`,
		"fallback": "tdesign:map-search-filled",
	});
}

export default Component;
