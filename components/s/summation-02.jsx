import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/por-t0dql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="por-t0dql"/>`,
		"fallback": "hugeicons:summation-02",
	});
}

export default Component;
