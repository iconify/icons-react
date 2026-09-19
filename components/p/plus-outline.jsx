import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl1s60bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl1s60bes"/>`,
		"fallback": "bitcoin-icons:plus-outline",
	});
}

export default Component;
