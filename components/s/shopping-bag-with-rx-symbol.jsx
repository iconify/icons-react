import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gor33sbjr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gor33sbjr"/>`,
		"fallback": "pinhead:shopping-bag-with-rx-symbol",
	});
}

export default Component;
