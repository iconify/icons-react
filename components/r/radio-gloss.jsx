import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcqrztb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcqrztb5j"/>`,
		"fallback": "withicons:radio-gloss",
	});
}

export default Component;
