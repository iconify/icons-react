import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lccu283fr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lccu283fr"/>`,
		"fallback": "pinhead:sad-face",
	});
}

export default Component;
