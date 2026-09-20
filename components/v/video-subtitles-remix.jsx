import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh4rs-bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gh4rs-bkb"/>`,
		"fallback": "streamline-sharp:video-subtitles-remix",
	});
}

export default Component;
