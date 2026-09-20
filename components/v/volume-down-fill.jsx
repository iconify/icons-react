import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkm0cjjfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkm0cjjfn"/>`,
		"fallback": "ri:volume-down-fill",
	});
}

export default Component;
