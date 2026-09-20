import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpstelbjx.css';
import '../../css/u/u807m5otq.css';
import '../../css/z/z8olsbb6u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpstelbjx"/><path clip-rule="evenodd" class="u807m5otq"/><path class="z8olsbb6u"/>`,
		"fallback": "qlementine-icons:shopping-cart-16",
	});
}

export default Component;
