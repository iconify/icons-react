import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap46j1bmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap46j1bmz"/>`,
		"fallback": "basil:skip-prev-solid",
	});
}

export default Component;
