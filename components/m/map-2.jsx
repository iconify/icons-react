import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woe178buz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="woe178buz"/>`,
		"fallback": "reicon:map-2",
	});
}

export default Component;
