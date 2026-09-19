import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts0-w2bzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts0-w2bzz"/>`,
		"fallback": "iconamoon:sign-minus-thin",
	});
}

export default Component;
