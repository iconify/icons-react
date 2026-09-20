import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s55_9jckw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s55_9jckw"/>`,
		"fallback": "reicon:video-play-h",
	});
}

export default Component;
