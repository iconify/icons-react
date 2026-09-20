import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcqvfeb3g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcqvfeb3g"/>`,
		"fallback": "streamline-plump:music-note-2",
	});
}

export default Component;
