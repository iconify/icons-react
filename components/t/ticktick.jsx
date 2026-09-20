import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf70drn3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf70drn3k"/>`,
		"fallback": "thesvg:ticktick",
	});
}

export default Component;
