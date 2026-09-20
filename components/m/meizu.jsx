import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pttbz8__g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pttbz8__g"/>`,
		"fallback": "thesvg:meizu",
	});
}

export default Component;
