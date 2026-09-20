import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwxxu2vds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwxxu2vds"/>`,
		"fallback": "mdi:microphone-question",
	});
}

export default Component;
