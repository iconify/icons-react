import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygj5i0b7e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ygj5i0b7e"/>`,
		"fallback": "streamline-plump:video-subtitles-remix",
	});
}

export default Component;
