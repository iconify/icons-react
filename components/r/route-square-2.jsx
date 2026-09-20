import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmzbrk_2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmzbrk_2y"/>`,
		"fallback": "tabler:route-square-2",
	});
}

export default Component;
