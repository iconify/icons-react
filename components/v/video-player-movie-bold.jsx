import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv99tik4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv99tik4s"/>`,
		"fallback": "streamline-ultimate:video-player-movie-bold",
	});
}

export default Component;
