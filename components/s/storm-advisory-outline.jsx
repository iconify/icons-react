import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzow25bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzow25bmr"/>`,
		"fallback": "mdi:storm-advisory-outline",
	});
}

export default Component;
