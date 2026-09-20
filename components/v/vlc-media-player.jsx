import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfkh_9xxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfkh_9xxh"/>`,
		"fallback": "thesvg:vlc-media-player",
	});
}

export default Component;
