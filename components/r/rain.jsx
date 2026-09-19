import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlg7xccoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlg7xccoe"/>`,
		"fallback": "iconoir:rain",
	});
}

export default Component;
