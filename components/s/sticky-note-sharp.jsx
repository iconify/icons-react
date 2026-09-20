import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5zn_wegq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5zn_wegq"/>`,
		"fallback": "pixelarticons:sticky-note-sharp",
	});
}

export default Component;
