import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl8oj5rij.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl8oj5rij"/>`,
		"fallback": "pinhead:pixel-apple",
	});
}

export default Component;
