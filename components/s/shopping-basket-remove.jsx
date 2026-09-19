import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bic_6imzx.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bic_6imzx"/>`,
		"fallback": "fontisto:shopping-basket-remove",
	});
}

export default Component;
