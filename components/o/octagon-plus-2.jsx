import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyd8b1tgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyd8b1tgb"/>`,
		"fallback": "tabler:octagon-plus-2",
	});
}

export default Component;
