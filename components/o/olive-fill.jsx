import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovof3zl8q.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovof3zl8q"/>`,
		"fallback": "pullo:olive-fill",
	});
}

export default Component;
