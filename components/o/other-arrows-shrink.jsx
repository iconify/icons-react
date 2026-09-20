import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpamm-b6d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wpamm-b6d"/>`,
		"fallback": "streamline-block:other-arrows-shrink",
	});
}

export default Component;
