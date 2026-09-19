import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfs57crqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfs57crqg"/>`,
		"fallback": "boxicons:shopping-bag-alt-filled",
	});
}

export default Component;
