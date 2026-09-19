import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cint8ubeo.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cint8ubeo"/>`,
		"fallback": "whh:undo",
	});
}

export default Component;
