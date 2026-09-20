import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nglok4ztb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nglok4ztb"/>`,
		"fallback": "streamline-sharp:video-subtitles-solid",
	});
}

export default Component;
