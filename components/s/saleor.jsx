import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lml3v6bum.css';
import '../../css/w/wgzcd4bsb.css';

const viewBox = {"width":57.6,"height":19.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lml3v6bum"/><path class="wgzcd4bsb"/>`,
		"fallback": "thesvg-color:saleor",
	});
}

export default Component;
