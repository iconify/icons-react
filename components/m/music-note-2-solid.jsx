import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3w_inz3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3w_inz3k"/>`,
		"fallback": "streamline-plump:music-note-2-solid",
	});
}

export default Component;
