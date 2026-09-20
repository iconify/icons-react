import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvwtqr81i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvwtqr81i"/>`,
		"fallback": "mdi:laptop-windows",
	});
}

export default Component;
