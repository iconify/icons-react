import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeid-qb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeid-qb0q"/>`,
		"fallback": "tabler:layout-off",
	});
}

export default Component;
