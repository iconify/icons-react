import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etikd70mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etikd70mi"/>`,
		"fallback": "tabler:plus-equal",
	});
}

export default Component;
