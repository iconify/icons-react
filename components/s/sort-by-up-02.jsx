import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt0f4aciv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt0f4aciv"/>`,
		"fallback": "hugeicons:sort-by-up-02",
	});
}

export default Component;
