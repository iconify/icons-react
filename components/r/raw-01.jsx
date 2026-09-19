import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puo9268es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puo9268es"/>`,
		"fallback": "hugeicons:raw-01",
	});
}

export default Component;
