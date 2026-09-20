import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0cn04btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0cn04btg"/>`,
		"fallback": "thesvg:unjs",
	});
}

export default Component;
