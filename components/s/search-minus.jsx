import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzqfwxx1d.css';
import '../../css/x/x8-usg97v.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzqfwxx1d"/><path clip-rule="evenodd" class="x8-usg97v"/>`,
		"fallback": "lineicons:search-minus",
	});
}

export default Component;
