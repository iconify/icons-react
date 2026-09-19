import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqdrgbb8q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqdrgbb8q"/>`,
		"fallback": "fa7-solid:wave-square",
	});
}

export default Component;
