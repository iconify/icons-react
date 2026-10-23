import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhf5onx9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhf5onx9r"/>`,
		"fallback": "vadivam:utensils",
	});
}

export default Component;
