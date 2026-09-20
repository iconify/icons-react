import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cak87qbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cak87qbph"/>`,
		"fallback": "mdi:test-tube-empty",
	});
}

export default Component;
