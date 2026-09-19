import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds65t-b6x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds65t-b6x"/>`,
		"fallback": "at-icons:video-player",
	});
}

export default Component;
