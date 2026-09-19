import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpz66wbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpz66wbfw"/>`,
		"fallback": "hugeicons:rss-error",
	});
}

export default Component;
