import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msy5rfbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="msy5rfbyk"/>`,
		"fallback": "reicon:music-notes",
	});
}

export default Component;
