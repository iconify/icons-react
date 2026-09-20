import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl7u15blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl7u15blk"/>`,
		"fallback": "thesvg-color:paychex",
	});
}

export default Component;
