import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uknffcc2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uknffcc2t"/>`,
		"fallback": "hugeicons:tree-06",
	});
}

export default Component;
