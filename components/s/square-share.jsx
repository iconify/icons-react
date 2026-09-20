import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpw-9zl2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vpw-9zl2m"/>`,
		"fallback": "reicon:square-share",
	});
}

export default Component;
