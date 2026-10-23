import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz2-nnb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz2-nnb9u"/>`,
		"fallback": "vadivam:swatch-book",
	});
}

export default Component;
