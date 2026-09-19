import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbf5-9nsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbf5-9nsz"/>`,
		"fallback": "hugeicons:rotate-left-01",
	});
}

export default Component;
