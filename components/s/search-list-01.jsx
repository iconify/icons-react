import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3fkitbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3fkitbzz"/>`,
		"fallback": "hugeicons:search-list-01",
	});
}

export default Component;
