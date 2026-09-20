import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9ljbbcsg.css';
import '../../css/m/mhbz-4bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9ljbbcsg"/><path class="mhbz-4bgz"/>`,
		"fallback": "tdesign:map-distance-filled",
	});
}

export default Component;
