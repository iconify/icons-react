import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-3ir0g2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-3ir0g2i"/>`,
		"fallback": "thesvg-color:mojeek",
	});
}

export default Component;
