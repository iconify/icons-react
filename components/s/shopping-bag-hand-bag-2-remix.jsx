import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8lai_2yv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d8lai_2yv"/>`,
		"fallback": "streamline-sharp:shopping-bag-hand-bag-2-remix",
	});
}

export default Component;
