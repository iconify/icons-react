import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/figruzihz.css';
import '../../css/l/ll5ze5bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="figruzihz"/><path class="ll5ze5bad"/>`,
		"fallback": "streamline-freehand:settings-screwdriver",
	});
}

export default Component;
