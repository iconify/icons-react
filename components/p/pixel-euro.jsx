import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om7c014xl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om7c014xl"/>`,
		"fallback": "pinhead:pixel-euro",
	});
}

export default Component;
