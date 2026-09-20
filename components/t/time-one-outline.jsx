import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv74m9bnb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv74m9bnb"/>`,
		"fallback": "lsicon:time-one-outline",
	});
}

export default Component;
