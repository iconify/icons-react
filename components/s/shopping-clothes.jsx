import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svyv33w3v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svyv33w3v"/>`,
		"fallback": "streamline-block:shopping-clothes",
	});
}

export default Component;
