import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmqjlub6p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmqjlub6p"/>`,
		"fallback": "streamline:interface-arrows-split-vertical-up-merge-arrow-diagram",
	});
}

export default Component;
