import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4pralb3p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4pralb3p"/>`,
		"fallback": "pinhead:waterfall-with-froth",
	});
}

export default Component;
