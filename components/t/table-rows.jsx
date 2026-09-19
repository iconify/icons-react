import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcz__fbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcz__fbjq"/>`,
		"fallback": "iconoir:table-rows",
	});
}

export default Component;
