import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuvs13buz.css';
import '../../css/i/imty9-5fx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuvs13buz"/><path class="imty9-5fx"/>`,
		"fallback": "pixel:steam",
	});
}

export default Component;
