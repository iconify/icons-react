import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p04vnh08p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p04vnh08p"/>`,
		"fallback": "withicons:smile-gloss",
	});
}

export default Component;
