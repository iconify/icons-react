import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5gncdc7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a5gncdc7v"/>`,
		"fallback": "iconamoon:search-fill",
	});
}

export default Component;
