import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmxt67i4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmxt67i4v"/>`,
		"fallback": "mingcute:jump-line",
	});
}

export default Component;
