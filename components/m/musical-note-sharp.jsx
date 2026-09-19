import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0-o8vb6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0-o8vb6n"/>`,
		"fallback": "famicons:musical-note-sharp",
	});
}

export default Component;
