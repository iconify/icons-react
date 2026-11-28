import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fitd60bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fitd60bsz"/>`,
		"fallback": "noviair:video-heart",
	});
}

export default Component;
