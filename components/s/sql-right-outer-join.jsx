import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wccjcn_8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wccjcn_8x"/>`,
		"fallback": "mdi:sql-right-outer-join",
	});
}

export default Component;
