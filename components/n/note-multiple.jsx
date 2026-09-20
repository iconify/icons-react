import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eae-4-bqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eae-4-bqd"/>`,
		"fallback": "mdi-light:note-multiple",
	});
}

export default Component;
