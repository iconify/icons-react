import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-2ck6-qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-2ck6-qp"/>`,
		"fallback": "iconaut:list-filter-x-solid",
	});
}

export default Component;
