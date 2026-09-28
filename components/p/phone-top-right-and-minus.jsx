import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anw-b9pqs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anw-b9pqs"/>`,
		"fallback": "pinhead:phone-top-right-and-minus",
	});
}

export default Component;
