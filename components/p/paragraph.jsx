import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mae29i7lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mae29i7lc"/>`,
		"fallback": "hugeicons:paragraph",
	});
}

export default Component;
