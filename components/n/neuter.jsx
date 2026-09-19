import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wggch8-eq.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wggch8-eq"/>`,
		"fallback": "fa6-solid:neuter",
	});
}

export default Component;
