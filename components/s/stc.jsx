import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t99oo8baj.css';

const viewBox = {"width":1000,"height":499.614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t99oo8baj"/>`,
		"fallback": "thesvg-color:stc",
	});
}

export default Component;
