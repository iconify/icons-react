import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr6-vqfij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr6-vqfij"/>`,
		"fallback": "vadivam:mouse-pointer-2",
	});
}

export default Component;
