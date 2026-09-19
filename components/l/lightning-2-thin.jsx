import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smy76dmek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smy76dmek"/>`,
		"fallback": "iconamoon:lightning-2-thin",
	});
}

export default Component;
