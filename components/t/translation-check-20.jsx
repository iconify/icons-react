import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bktlkzkpq.css';
import '../../css/r/roo4x4bjc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bktlkzkpq"/><path class="roo4x4bjc"/>`,
		"fallback": "garden:translation-check-20",
	});
}

export default Component;
