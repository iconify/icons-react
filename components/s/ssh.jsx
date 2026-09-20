import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on3jn5iqe.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on3jn5iqe"/>`,
		"fallback": "thesvg-color:ssh",
	});
}

export default Component;
