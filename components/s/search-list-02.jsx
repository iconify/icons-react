import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj-x65o5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj-x65o5a"/>`,
		"fallback": "hugeicons:search-list-02",
	});
}

export default Component;
