import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iolobs1xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iolobs1xq"/>`,
		"fallback": "boxicons:water",
	});
}

export default Component;
