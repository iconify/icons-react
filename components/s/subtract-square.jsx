import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2k5pjb0f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2k5pjb0f"/>`,
		"fallback": "streamline:subtract-square",
	});
}

export default Component;
