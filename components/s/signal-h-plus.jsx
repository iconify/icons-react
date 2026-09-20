import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rot91g7vu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rot91g7vu"/>`,
		"fallback": "tabler:signal-h-plus",
	});
}

export default Component;
