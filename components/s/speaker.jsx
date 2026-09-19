import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmkin6x6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmkin6x6z"/>`,
		"fallback": "gridicons:speaker",
	});
}

export default Component;
