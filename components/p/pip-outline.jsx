import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r193a-b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r193a-b1r"/>`,
		"fallback": "solar:pip-outline",
	});
}

export default Component;
