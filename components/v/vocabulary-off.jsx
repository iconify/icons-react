import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsjirq5le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsjirq5le"/>`,
		"fallback": "tabler:vocabulary-off",
	});
}

export default Component;
