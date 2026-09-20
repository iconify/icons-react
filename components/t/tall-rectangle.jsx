import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dza1i86in.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dza1i86in"/>`,
		"fallback": "pinhead:tall-rectangle",
	});
}

export default Component;
