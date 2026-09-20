import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y30mjzbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y30mjzbuw"/>`,
		"fallback": "ri:video-upload-line",
	});
}

export default Component;
