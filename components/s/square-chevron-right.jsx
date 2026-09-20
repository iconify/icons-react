import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if9nj_b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if9nj_b8w"/>`,
		"fallback": "pixelarticons:square-chevron-right",
	});
}

export default Component;
