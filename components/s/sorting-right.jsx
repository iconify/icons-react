import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-3-4ac2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-3-4ac2w"/>`,
		"fallback": "iconamoon:sorting-right",
	});
}

export default Component;
