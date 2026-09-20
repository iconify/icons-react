import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvkitwbrq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvkitwbrq"/>`,
		"fallback": "pinhead:pixel-arrow-up",
	});
}

export default Component;
