import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp_1n0ejz.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp_1n0ejz"/>`,
		"fallback": "jam:set-backward-square-f",
	});
}

export default Component;
