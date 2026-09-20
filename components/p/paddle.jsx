import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/att-2cbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="att-2cbhn"/>`,
		"fallback": "thesvg-color:paddle",
	});
}

export default Component;
