import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fleuerbsq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fleuerbsq"/>`,
		"fallback": "streamline:shovel-rake",
	});
}

export default Component;
