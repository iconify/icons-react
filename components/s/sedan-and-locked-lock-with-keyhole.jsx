import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa2ykobom.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa2ykobom"/>`,
		"fallback": "pinhead:sedan-and-locked-lock-with-keyhole",
	});
}

export default Component;
