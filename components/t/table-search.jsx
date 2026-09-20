import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeofr7ors.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeofr7ors"/>`,
		"fallback": "mdi:table-search",
	});
}

export default Component;
