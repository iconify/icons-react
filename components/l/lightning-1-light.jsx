import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buv1006ad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buv1006ad"/>`,
		"fallback": "iconamoon:lightning-1-light",
	});
}

export default Component;
