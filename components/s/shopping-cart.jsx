import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppdy_ccdn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppdy_ccdn"/>`,
		"fallback": "nimbus:shopping-cart",
	});
}

export default Component;
