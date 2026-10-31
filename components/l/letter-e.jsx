import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwq8zj8yp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwq8zj8yp"/>`,
		"fallback": "vadivam:letter-e",
	});
}

export default Component;
