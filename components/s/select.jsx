import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut86ghblf.css';

const viewBox = {"width":44,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ut86ghblf"/>`,
		"fallback": "formkit:select",
	});
}

export default Component;
