import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g81s1jb6y.css';
import '../../css/t/t0v9d0zwi.css';
import '../../css/d/d45sk0bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g81s1jb6y"/><path class="t0v9d0zwi"/><path class="d45sk0bcl"/>`,
		"fallback": "streamline-freehand:vectors-add-anchor",
	});
}

export default Component;
