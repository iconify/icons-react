import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chp57gsgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="chp57gsgi"/>`,
		"fallback": "reicon:pause-circle",
	});
}

export default Component;
