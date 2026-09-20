import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0s8dnbqg.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0s8dnbqg"/>`,
		"fallback": "lineicons:menu-hamburger-1",
	});
}

export default Component;
