import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teyukk8yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teyukk8yt"/>`,
		"fallback": "tabler:transition-left-filled",
	});
}

export default Component;
