import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2hvsab5f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u2hvsab5f"/>`,
		"fallback": "streamline-plump:music-note-2-remix",
	});
}

export default Component;
