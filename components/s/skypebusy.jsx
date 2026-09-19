import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfxlr7j4w.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfxlr7j4w"/>`,
		"fallback": "whh:skypebusy",
	});
}

export default Component;
