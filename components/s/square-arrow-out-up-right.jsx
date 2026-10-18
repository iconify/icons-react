import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tidhu8h8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tidhu8h8k"/>`,
		"fallback": "vadivam:square-arrow-out-up-right",
	});
}

export default Component;
