import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4w7-yawg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4w7-yawg"/>`,
		"fallback": "fa7-solid:mattress-pillow",
	});
}

export default Component;
