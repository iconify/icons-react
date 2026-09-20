import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv0j12bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tv0j12bcc"/>`,
		"fallback": "streamline-sharp:music-note-1-solid",
	});
}

export default Component;
