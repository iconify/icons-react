import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwyk05bnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wwyk05bnm"/>`,
		"fallback": "streamline-sharp:music-note-trebble-clef-solid",
	});
}

export default Component;
