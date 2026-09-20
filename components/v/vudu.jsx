import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7lu8lw2b.css';

const viewBox = {"width":300,"height":83.196};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7lu8lw2b"/>`,
		"fallback": "thesvg-color:vudu",
	});
}

export default Component;
