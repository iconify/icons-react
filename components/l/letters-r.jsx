import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8dzo7vbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8dzo7vbb"/>`,
		"fallback": "tdesign:letters-r",
	});
}

export default Component;
