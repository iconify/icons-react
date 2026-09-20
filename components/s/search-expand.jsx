import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxw_zcb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxw_zcb4b"/>`,
		"fallback": "mdi:search-expand",
	});
}

export default Component;
