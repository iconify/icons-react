import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxalj7bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxalj7bar"/>`,
		"fallback": "iconaut:plus-square-solid",
	});
}

export default Component;
