import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egq4n-0ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egq4n-0ks"/>`,
		"fallback": "hugeicons:turkish-lira",
	});
}

export default Component;
