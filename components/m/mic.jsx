import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmets6kjm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmets6kjm"/>`,
		"fallback": "icomoon-free:mic",
	});
}

export default Component;
