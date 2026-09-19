import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0ms5kkwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0ms5kkwh"/>`,
		"fallback": "bxl:mastodon",
	});
}

export default Component;
