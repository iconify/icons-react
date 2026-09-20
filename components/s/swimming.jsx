import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvkc8whus.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvkc8whus"/>`,
		"fallback": "map:swimming",
	});
}

export default Component;
