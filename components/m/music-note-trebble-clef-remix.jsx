import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e84jpyb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e84jpyb_b"/>`,
		"fallback": "streamline-sharp:music-note-trebble-clef-remix",
	});
}

export default Component;
