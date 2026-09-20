import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uveicsdyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uveicsdyc"/>`,
		"fallback": "mdi:smiley-cry-outline",
	});
}

export default Component;
