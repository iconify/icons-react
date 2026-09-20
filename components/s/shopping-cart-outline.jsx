import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tny0wxbmg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tny0wxbmg"/>`,
		"fallback": "lsicon:shopping-cart-outline",
	});
}

export default Component;
