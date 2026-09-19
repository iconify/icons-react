import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fooidy7tc.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fooidy7tc"/>`,
		"fallback": "fontisto:twitter",
	});
}

export default Component;
