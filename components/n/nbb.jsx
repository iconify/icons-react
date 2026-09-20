import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgbh3otig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgbh3otig"/>`,
		"fallback": "thesvg:nbb",
	});
}

export default Component;
