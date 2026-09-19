import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nblah3f0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nblah3f0h"/>`,
		"fallback": "hugeicons:more-02",
	});
}

export default Component;
