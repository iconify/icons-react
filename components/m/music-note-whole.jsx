import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvxr66big.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvxr66big"/>`,
		"fallback": "mdi:music-note-whole",
	});
}

export default Component;
