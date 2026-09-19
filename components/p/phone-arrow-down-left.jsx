import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se5c19beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se5c19beu"/>`,
		"fallback": "heroicons-outline:phone-arrow-down-left",
	});
}

export default Component;
