import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naik7mnuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="naik7mnuq"/>`,
		"fallback": "streamline-sharp:shrink-window-osx-remix",
	});
}

export default Component;
