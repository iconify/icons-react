import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl7l21bgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl7l21bgb"/>`,
		"fallback": "thesvg-color:suitest",
	});
}

export default Component;
