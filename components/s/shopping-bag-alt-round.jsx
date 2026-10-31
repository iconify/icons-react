import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpg36i2em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpg36i2em"/>`,
		"fallback": "coolicons:shopping-bag-alt-round",
	});
}

export default Component;
