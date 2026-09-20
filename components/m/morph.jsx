import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz1c8bb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz1c8bb9f"/>`,
		"fallback": "thesvg:morph",
	});
}

export default Component;
