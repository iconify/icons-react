import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7uajgbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7uajgbvz"/>`,
		"fallback": "vadivam:volume-x",
	});
}

export default Component;
