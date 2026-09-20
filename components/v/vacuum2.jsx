import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6hk6n6ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u6hk6n6ho"/>`,
		"fallback": "reicon:vacuum2",
	});
}

export default Component;
