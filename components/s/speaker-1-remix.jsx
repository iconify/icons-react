import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psb2m6b5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="psb2m6b5c"/>`,
		"fallback": "streamline-sharp:speaker-1-remix",
	});
}

export default Component;
