import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjpo16ghz.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjpo16ghz"/>`,
		"fallback": "fontisto:snowflake-8",
	});
}

export default Component;
