import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5snt8_wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5snt8_wv"/>`,
		"fallback": "simple-icons:shopee",
	});
}

export default Component;
