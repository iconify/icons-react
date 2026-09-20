import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiq_uhhwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iiq_uhhwa"/>`,
		"fallback": "reicon:search-bug3",
	});
}

export default Component;
