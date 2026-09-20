import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjjnd6bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjjnd6bwo"/>`,
		"fallback": "streamline-ultimate:office-shelf-1",
	});
}

export default Component;
