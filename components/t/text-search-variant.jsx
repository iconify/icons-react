import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at8qymb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at8qymb5y"/>`,
		"fallback": "mdi:text-search-variant",
	});
}

export default Component;
