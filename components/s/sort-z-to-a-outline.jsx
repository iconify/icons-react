import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6353sbjy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6353sbjy"/>`,
		"fallback": "lsicon:sort-z-to-a-outline",
	});
}

export default Component;
