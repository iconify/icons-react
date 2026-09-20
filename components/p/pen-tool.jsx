import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgsmusb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgsmusb4z"/>`,
		"fallback": "reicon:pen-tool",
	});
}

export default Component;
