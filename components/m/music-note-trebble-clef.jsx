import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow0w91b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow0w91b8q"/>`,
		"fallback": "streamline-sharp:music-note-trebble-clef",
	});
}

export default Component;
