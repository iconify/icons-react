import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyeser1ot.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyeser1ot"/>`,
		"fallback": "pinhead:pixel-rupee",
	});
}

export default Component;
