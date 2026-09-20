import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3_kvuzgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3_kvuzgm"/>`,
		"fallback": "keyline-icons:search-2",
	});
}

export default Component;
