import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4qvfxzmh.css';

const viewBox = {"width":466,"height":671};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4qvfxzmh"/>`,
		"fallback": "ls:u",
	});
}

export default Component;
