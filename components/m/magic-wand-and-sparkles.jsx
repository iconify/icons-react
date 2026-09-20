import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwnz-qbcl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwnz-qbcl"/>`,
		"fallback": "pinhead:magic-wand-and-sparkles",
	});
}

export default Component;
