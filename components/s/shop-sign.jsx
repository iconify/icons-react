import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcqm4ebmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcqm4ebmk"/>`,
		"fallback": "hugeicons:shop-sign",
	});
}

export default Component;
