import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n53_6nb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n53_6nb7x"/>`,
		"fallback": "vadivam:mouse-pointer-2-off",
	});
}

export default Component;
