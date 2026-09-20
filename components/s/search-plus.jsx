import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9v4b39in.css';
import '../../css/x/x8-usg97v.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9v4b39in"/><path clip-rule="evenodd" class="x8-usg97v"/>`,
		"fallback": "lineicons:search-plus",
	});
}

export default Component;
